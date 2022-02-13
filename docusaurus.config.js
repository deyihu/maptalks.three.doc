// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config}
 * 
 */
const config = {
  title: 'Maptalks.Three',
  tagline: 'Show Your Data Base On Maptalks && Threejs',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: './build/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://avatars.githubusercontent.com/u/13678959?s=200&v=4',
  organizationName: 'maptalks', // Usually your GitHub org/user name.
  projectName: 'maptalks.three', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/deyihu/maptalks.three.doc/blob/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Maptalks.Three',
        logo: {
          alt: 'My Site Logo',
          src: 'https://avatars.githubusercontent.com/u/13678959?s=200&v=4',
        },
        items: [
          {
            type: 'doc',
            docId: 'api/intro',
            position: 'left',
            label: 'API',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'second',
          //   position: 'left',
          //   label: 'Second',
          // },
          // { to: '/blog', label: 'Blog', position: 'left' },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/api/intro',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Maptalks',
                href: 'https://maptalks.org/',
              },
              {
                label: 'three.js',
                href: 'https://threejs.org/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Maptalks. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
