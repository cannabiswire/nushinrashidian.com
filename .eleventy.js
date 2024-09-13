const CleanCSS = require('clean-css');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('_src/admin');
	eleventyConfig.addPassthroughCopy('_src/assets');
	eleventyConfig.addPassthroughCopy('uploads');

  // Add CSS minification and filter.
  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      input: '_src',
      output: '_site',
    },
  };
};
