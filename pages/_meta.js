export default {
    index: {
        title: 'Introduction',
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
    getstart: {

        title: 'Get Started',
        theme: {
            breadcrumb: true,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: true
        }
    },
    developments: {

        title: 'Developments',
        theme: {
            breadcrumb: true,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: true
        }
    },
    cloud: {

        title: 'Cloud',
        theme: {
            breadcrumb: true,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: true
        }
    },
    contactus: {
        title: 'Contact ↗',
        type: 'page',
        theme: {
            breadcrumb: true,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: true,
    }}

}