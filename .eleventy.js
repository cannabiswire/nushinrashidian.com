const CleanCSS = require('clean-css');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('_src/admin');
	eleventyConfig.addPassthroughCopy('_src/assets');

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
