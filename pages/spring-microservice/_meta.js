export default {
  create: {
    title: "Create",
    theme: {
      breadcrumb: true,
      footer: true,
      sidebar: true,
      toc: {
        float: false,
      },
      pagination: true,
      editLink: true,
      // typesetting: 'article'
    },
    themeConfig: {
      toc: {
        float: true, // Enables a floating table of contents
        extraContent: true,
        component: true,
        title: "Table of Contents",
        backToTop: true,
      },
    },
  },
  workspace: {
    title: "Workspace",
    theme: {
      breadcrumb: true,
      footer: true,
      sidebar: true,
      toc: true,
      pagination: true,
    },
  },
  deployment: {
    title: "Getting Started",
    theme: {
      breadcrumb: true,
      footer: true,
      sidebar: true,
      toc: true,
      pagination: true,
    },
  },
};
