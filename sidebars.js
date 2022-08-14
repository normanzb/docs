/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  overview: [{ type: 'autogenerated', dirName: 'overview' }],
  developer: [
    { type: 'autogenerated', dirName: 'developer' },
    {
      type: "category",
      label: "🔌 API (experimental)",
      link: {
        type: "generated-index",
        title: "Horoscope API",
      },
      items: require("./docs/horoscope/sidebar"),
    },
  ],
  validator: [{ type: 'autogenerated', dirName: 'validator' }],
  pyxissafe: [{ type: 'autogenerated', dirName: 'product/pyxis-safe' }],
  aurascan: [{ type: 'autogenerated', dirName: 'product/aurascan' }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
