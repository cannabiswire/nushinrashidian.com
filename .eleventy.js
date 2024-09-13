const CleanCSS = require('clean-css');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('admin');
	eleventyConfig.addPassthroughCopy('assets');
	eleventyConfig.addPassthroughCopy('uploads');

  // Add CSS minification and filter.
  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      input: './',
      output: '_site',
    },
  };
};
