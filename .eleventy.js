const pluginRss = require("@11ty/eleventy-plugin-rss");
const SITE_TIME_ZONE = "America/Los_Angeles";

function dateOnlyAtNoonUtc(date) {
  const d = new Date(date);
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 12));
}

function getTimeZoneOffsetMinutes(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset"
  }).formatToParts(date);
  const offset = parts.find((part) => part.type === "timeZoneName")?.value || "GMT";
  const match = offset.match(/^GMT([+-])(\d{1,2})(?::(\d{2}))?$/);
  if (!match) return 0;
  const sign = match[1] === "+" ? 1 : -1;
  const hours = Number(match[2]);
  const minutes = Number(match[3] || 0);
  return sign * (hours * 60 + minutes);
}

function dateOnlyAtPacificMidnight(date) {
  const d = new Date(date);
  const year = d.getUTCFullYear();
  const month = d.getUTCMonth();
  const day = d.getUTCDate();
  const probe = new Date(Date.UTC(year, month, day, 8));
  const offsetMinutes = getTimeZoneOffsetMinutes(probe, SITE_TIME_ZONE);
  return new Date(Date.UTC(year, month, day) - offsetMinutes * 60 * 1000);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("dateDisplay", function(date) {
    const d = dateOnlyAtNoonUtc(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: SITE_TIME_ZONE
    });
  });

  eleventyConfig.addFilter("isoDate", function(date) {
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("showUpdated", function(date, updated) {
    if (!updated) return false;
    const toDay = (value) => new Date(value).toISOString().split("T")[0];
    return toDay(updated) !== toDay(date);
  });

  eleventyConfig.addFilter("postUpdatedAt", function(date, updated) {
    if (!updated) return date;
    const toDay = (value) => new Date(value).toISOString().split("T")[0];
    return toDay(updated) !== toDay(date) ? updated : date;
  });

  eleventyConfig.addFilter("dateToPacificRfc822", function(date) {
    const d = dateOnlyAtPacificMidnight(date);
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: SITE_TIME_ZONE,
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
      timeZoneName: "short"
    }).formatToParts(d);
    const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
    return `${value.weekday}, ${value.day} ${value.month} ${value.year} ${value.hour}:${value.minute}:${value.second} ${value.timeZoneName}`;
  });

  eleventyConfig.addFilter("upper", function(value) {
    return String(value).toUpperCase();
  });

  eleventyConfig.addFilter("findTranslation", function(posts, translationKey, lang) {
    if (!translationKey || !posts) return null;
    const currentLang = lang || "en";
    return (
      posts.find(
        (p) =>
          p.data.translation_key === translationKey &&
          (p.data.lang || "en") !== currentLang
      ) || null
    );
  });

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/**/*.md")
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  eleventyConfig.addCollection("postsListed", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/**/*.md")
      .filter((p) => p.data.permalink !== false)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
