import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'


export default {
    // logo: <span>Cloudinator Documentation</span>, configuration of logo and name of the documentation
    logo: (
        <>
            <img src="/images/cloudinator-logo.jpg" alt="Cloudinator Logo" width="45" height="45" />
            <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
            Cloudinator Documentation
        </span>
        </>
    )
    ,
    project: {
        link: 'https://github.com/shuding/nextra'
    }
    ,

    // The theme configuration for Table of Contents
    toc: {

        float: true, // Makes the TOC float on the right side
        title: 'On This Page', // Sets the title of the TOC
        backToTop: 'Scroll to Top', // Adds a "Scroll to Top" link at the bottom

        // if you want to add additional content below the TOC
        extraContent: <p>Additional content below the TOC</p>,
    },

    // for next and previous links navigations
    navigation: {
        prev: true,
        next: true
    },


    // The theme configuration for the head of the page
    head() {
        const { asPath, defaultLocale, locale } = useRouter()
        const { frontMatter } = useConfig()
        const url =
            'https://my-app.com' +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

        return (
            <>
                <meta property="og:url" content={url} />
                <meta property="og:title" content={frontMatter.title || 'Nextra'} />
                <meta
                    property="og:description"
                    content={frontMatter.description || 'The next site builder'}
                />
            </>
        )
    }
}

