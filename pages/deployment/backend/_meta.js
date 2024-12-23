export default {
    spring: {
        title: 'Spring',
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
                title: 'Table of Contents',
                backToTop: true,
            }
        }
    },
    nodejs: {
        title: 'NodeJS',
        theme: {
            breadcrumb: true,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: true
        }
    },
    nestjs: {
        title: 'NestJS',
        theme: {
            breadcrumb: true,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: true
        }
    },
}