// next.config.mjs
import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.ts',
    output: "standalone",
});

export default withNextra({
});