// eslint-disable-next-line import/no-anonymous-default-export
const themeConfig = {
  logo: "Cloudinator",
  project: {
    link: "https://github.com/Cloudinator",
  },
  docsRepositoryBase: "https://github.com/your-repo/tree/main/pages",
  footer: false,
  sidebar: {
    defaultMenuCollapsed: false,
    styles: {
      item: "hover:bg-purple-400 hover:text-purple-600",
      activeItem: "bg-[#1a73e8] text-white",
    },
  },
  navbar: {
    links: [
      { name: "Home", href: "/" },
      { name: "Docs", href: "/docs" },
      { name: "About", href: "/about" }, // Added About section
    ],
  },
  themeSwitch: false,
};

export default themeConfig;
