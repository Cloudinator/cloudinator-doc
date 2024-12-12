// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logo: "Cloudinator",
  project: {
    link: "https://cloudinator-ui.naktech.pro", // Project link in the top-right corner
  },
  docsRepositoryBase: "https://github.com/your-repo/tree/main/pages", // Link to your docs repo for "Edit this page"
  footer: {
    text: "Cloudinator © 2024", // Footer text
  },
  sidebar: {
    defaultMenuCollapsed: false, // Keep menus expanded by default
    toggleButton: true, // Show a toggle button for collapsing the sidebar
    styles: {
      item: "hover:bg-[#f0f0f0] hover:text-[#1a73e8]", // Custom hover styles for sidebar items
      activeItem: "bg-[#1a73e8] text-white",
    },
  },
  primaryHue: {
    light: 200, // Customize primary hue for light mode
    dark: 220, // Customize primary hue for dark mode
  },
  nextThemes: {
    defaultTheme: "light", // Default theme on first load
    storageKey: "theme", // Key for storing user theme preference
    themes: ["light", "dark"], // Available themes
  },
  i18n: [
    { locale: "en", text: "English" }, // Internationalization (i18n) options
    { locale: "fr", text: "French" },
  ],
};
