// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logo: "Cloudinator",
  project: {
    link: "https://cloudinator-ui.naktech.pro",
  },
  docsRepositoryBase: "https://github.com/your-repo/tree/main/pages",
  footer: {
    text: "Cloudinator © 2024",
  },
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
  pages: {
    contact: {
      link: "/contact",
      title: "Contact Us",
    },
  },
  navLinks: [
    { title: "Home", link: "/" },
    { title: "Docs", link: "/docs" },
    { title: "Contact Us", link: "/contact" },
  ],
};
