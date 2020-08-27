module.exports = {
  title: 'Documentation-OpenSource',
  tagline: 'The tagline of my site',
  url: ' /Documentation-OpenSource/',
  baseUrl: '/Documentation-OpenSource/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'qAIRa', // Usually your GitHub org/user name.
  projectName: 'https://qaira.github.io/', // Usually your repo name.
  // themeConfig: {
  //   navbar: {
  //     title: 'My Site',
  //     logo: {
  //       alt: 'My Site Logo',
  //       src: 'img/logo.svg',
  //     },
  //     items: [
  //       {
  //         to: 'docs/',
  //         activeBasePath: 'docs',
  //         label: 'Docs',
  //         position: 'left',
  //       },
  //       {to: 'blog', label: 'Blog', position: 'left'},
  //       {
  //         href: 'https://github.com/facebook/docusaurus',
  //         label: 'GitHub',
  //         position: 'right',
  //       },
  //     ],
  //   },
  //   footer: {
  //     style: 'dark',
  //     links: [
  //       {
  //         title: 'Docs',
  //         items: [
  //           {
  //             label: 'Style Guide',
  //             to: 'docs/',
  //           },
  //           {
  //             label: 'Second Doc',
  //             to: 'docs/doc2/',
  //           },
  //         ],
  //       },
  //       {
  //         title: 'Community',
  //         items: [
  //           {
  //             label: 'Stack Overflow',
  //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
  //           },
  //           {
  //             label: 'Discord',
  //             href: 'https://discordapp.com/invite/docusaurus',
  //           },
  //           {
  //             label: 'Twitter',
  //             href: 'https://twitter.com/docusaurus',
  //           },
  //         ],
  //       },
  //       {
  //         title: 'More',
  //         items: [
  //           {
  //             label: 'Blog',
  //             to: 'blog',
  //           },
  //           {
  //             label: 'GitHub',
  //             href: 'https://github.com/facebook/docusaurus',
  //           },
  //         ],
  //       },
  //     ],
  //     copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
  //   },
  // },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/qAIRa/Documentation-OpenSource',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/qAIRa/Documentation-OpenSource',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
