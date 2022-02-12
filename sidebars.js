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
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

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
  docs: [
    'api/intro',
    {
      type: 'category',
      label: 'BaseObject',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'api/baseobject/base',
        'api/baseobject/custom',
        // 'api/baseobject/congratulations',
        // 'api/baseobject/create-a-blog-post',
        // 'api/baseobject/create-a-document',
        // 'api/baseobject/create-a-page',
        // 'api/baseobject/deploy-your-site',
      ]
    },
    {
      type: 'category',
      label: 'ThreeLayer',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'api/threelayer/manage-docs-versions',
        'api/threelayer/translate-your-site',
      ]
    }
  ],

  //   {
  //     type: 'category',
  //     label: 'Guides',
  //     link: {
  //       type: 'generated-index',
  //       title: 'Docusaurus Guides',
  //       description:
  //         "Let's learn about the most important Docusaurus concepts!",
  //       keywords: ['guides'],
  //       image: '/img/docusaurus.png',
  //     },
  //     items: [
  //       'guides/creating-pages',
  //       {
  //         type: 'category',
  //         label: 'Docs',
  //         link: {
  //           type: 'doc',
  //           id: 'guides/docs/introduction',
  //         },
  //         items: [
  //           'guides/docs/create-doc',
  //           {
  //             type: 'category',
  //             label: 'Sidebar',
  //             link: {
  //               type: 'doc',
  //               id: 'guides/docs/sidebar/index',
  //             },
  //             items: [
  //               'guides/docs/sidebar/items',
  //               'guides/docs/sidebar/autogenerated',
  //               'guides/docs/sidebar/multiple-sidebars',
  //             ],
  //           },
  //           'guides/docs/versioning',
  //           'guides/docs/markdown-features',
  //           'guides/docs/multi-instance',
  //         ],
  //       },
  //       'blog',
  //       {
  //         type: 'category',
  //         label: 'Markdown Features',
  //         link: {
  //           type: 'doc',
  //           id: 'guides/markdown-features/introduction',
  //         },
  //         items: [
  //           'guides/markdown-features/react',
  //           'guides/markdown-features/tabs',
  //           'guides/markdown-features/code-blocks',
  //           'guides/markdown-features/admonitions',
  //           'guides/markdown-features/headings',
  //           'guides/markdown-features/inline-toc',
  //           'guides/markdown-features/assets',
  //           'guides/markdown-features/plugins',
  //           'guides/markdown-features/math-equations',
  //           'guides/markdown-features/head-metadata',
  //         ],
  //       },
  //       'styling-layout',
  //       'static-assets',
  //       'search',
  //       'browser-support',
  //       'seo',
  //       'using-plugins',
  //       'deployment',
  //       {
  //         type: 'category',
  //         label: 'Internationalization',
  //         link: { type: 'doc', id: 'i18n/introduction' },
  //         items: [
  //           {
  //             type: 'doc',
  //             id: 'i18n/tutorial',
  //             label: 'Tutorial',
  //           },
  //           {
  //             type: 'doc',
  //             id: 'i18n/git',
  //             label: 'Using Git',
  //           },
  //           {
  //             type: 'doc',
  //             id: 'i18n/crowdin',
  //             label: 'Using Crowdin',
  //           },
  //         ],
  //       },
  //       'guides/whats-next',
  //     ],
  //   },
  //   {
  //     type: 'category',
  //     label: 'Advanced Guides',
  //     link: { type: 'doc', id: 'advanced/index' },
  //     items: [
  //       'advanced/architecture',
  //       'advanced/plugins',
  //       'advanced/routing',
  //       'advanced/swizzling',
  //       'advanced/ssg',
  //     ],
  //   },
  //   {
  //     type: 'category',
  //     label: 'Migrating from v1 to v2',
  //     items: [
  //       'migration/migration-overview',
  //       'migration/migration-automated',
  //       'migration/migration-manual',
  //       'migration/migration-versioned-sites',
  //       'migration/migration-translated-sites',
  //     ],
  //   },
  // ],
  // api: [
  //   'cli',
  //   'docusaurus-core',
  //   {
  //     type: 'autogenerated',
  //     dirName: 'api',
  //   },
  second: [
        'second/intro',
        // {
        //   type: 'category',
        //   label: 'BaseObject',
        //   link: {
        //     type: 'generated-index',
        //   },
        //   collapsed: false,
        //   items: [
        //     'api/baseobject/congratulations',
        //     'api/baseobject/create-a-blog-post',
        //     'api/baseobject/create-a-document',
        //     'api/baseobject/create-a-page',
        //     'api/baseobject/deploy-your-site',
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'ThreeLayer',
        //   link: {
        //     type: 'generated-index',
        //   },
        //   collapsed: false,
        //   items: [
        //     'api/threelayer/manage-docs-versions',
        //     'api/threelayer/translate-your-site',
        //   ]
        // }
      ]
};

module.exports = sidebars;
