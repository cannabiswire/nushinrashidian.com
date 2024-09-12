module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('_src/admin');
	eleventyConfig.addPassthroughCopy('_src/assets');

  return {
    dir: {
      input: '_src',
      output: '_site',
    },
  };
};
