export default {
  introduction: {
    title: "Introduction",
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
  "getting-started": {
    title: "Getting Started",
    theme: {
      breadcrumb: true,
      footer: true,
      sidebar: true,
      toc: true,
      pagination: true,
    },
  },
  "core-concepts": {
    title: "Core Concepts",
    theme: {
      breadcrumb: true,
      footer: true,
      sidebar: true,
      toc: true,
      pagination: true,
    },
  },
  "spring-boot": {
    title: "Spring Boot",
    theme: {
      breadcrumb: true,
      footer: true,
      sidebar: true,
      toc: true,
      pagination: true,
    },
  }
};
