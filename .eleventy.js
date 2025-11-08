const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Add RSS plugin
  eleventyConfig.addPlugin(pluginRss);
  
  // Copy assets folder
  eleventyConfig.addPassthroughCopy("assets");
  
  // Date formatting filter
  eleventyConfig.addFilter("dateDisplay", function(date) {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  });
  
  // ISO date filter for datetime attribute
  eleventyConfig.addFilter("isoDate", function(date) {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  });
  
  // Sort posts by date (newest first)
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/**/*.md")
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
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
    // Exclude old HTML files and directories
    passthroughFileCopy: true
  };
};

