/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  overview: [
    { type: 'autogenerated', dirName: 'overview' }
  ],
  developer: [
    { type: 'autogenerated', dirName: 'developer' }
  ],
  validator: [
    { type: 'autogenerated', dirName: 'validator' }
  ],
  pyxissafe: [
    'product/pyxis-safe/index',
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'product/pyxis-safe/getting-started'
        }
      ]
    },
    {
      type: 'category',
      label: 'Making transactions',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'product/pyxis-safe/making-transaction'
        }
      ]
    },
    {
      type: 'category',
      label: 'Going Further',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'product/pyxis-safe/going-further'
        }
      ]
    },
    {
      type: 'category',
      label: 'Extras',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'product/pyxis-safe/extras'
        }
      ]
    },
  ],
  aurascan: [
    'product/aurascan/index',
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'product/aurascan/getting-started'
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'product/aurascan/advanced-topics'
        }
      ]
    }
  ],
  horoscope: [
    'product/horoscope/index',
    'product/horoscope/architecture/overview',
    {
      type: 'category',
      label: 'API',
      collapsible: false,
      items: require('./docs/horoscope/sidebar'),
    },
    {
      type: 'category',
      label: 'GraphQL in Horoscope V2',
      collapsible: false,
      items: require('./docs/horoscope-v2/sidebar'),
    },
  ],
  integrate: [
    {
      type: 'category',
      label: 'Exchange integration',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'integrate/exchange'
        }
      ]
    },
    {
      type: 'category',
      label: 'Wallet integration',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'integrate/wallet'
        }
      ]
    },
    {
      type: 'category',
      label: 'Tracker integration',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'integrate/tracker'
        }
      ]
    }
  ]
};

module.exports = sidebars;
