export default {
    html: {
        title: 'HTML',
        theme: {
            breadcrumb: true,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: true
        }
    },
    react: {
        title: 'React',
        theme: {
            breadcrumb: true,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: true
        }
    },
    nextjs: {
        title: 'Nextjs',
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
    laravel: {
        title: 'Laravel',
        theme: {
            breadcrumb: true,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: true
        }
    },
    vite: {
        title: 'Vite',
        theme: {
            breadcrumb: true,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: true
        }
    },
    vue: {
        title: 'Vue',
        theme: {
            breadcrumb: true,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: true
        }
    },
    nuxt: {
        title: 'Nuxt',
        theme: {
            breadcrumb: true,
            footer: true,
            sidebar: true,
            toc: true,
            pagination: true
        }
    },
}