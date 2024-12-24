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
    toggleButton: true,
    styles: {
      item: "hover:bg-[#f0f0f0] hover:text-[#1a73e8]",
      activeItem: "bg-[#1a73e8] text-white",
    },
  },
  primaryHue: {
    light: 200,
    dark: 220,
  },
  nextThemes: {
    defaultTheme: "light",
    storageKey: "theme",
    themes: ["light", "dark"],
  },
  navbar: {
    links: [
      { name: "Home", href: "/" },
      { name: "Docs", href: "/docs" },
      { name: "About", href: "/about" }, // Added About section
    ],
  },
};

export default themeConfig;
