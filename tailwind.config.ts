import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ytBtn: "var(--ytBtn)",
        ytIcon: "var(--ytIcon)",
        ytBtnHover: "var(--ytBtnHover)",
        ytBtnHoverLight: "var(--ytBtnHoverLight)",
        ytBtnHoverText: "var(--ytBtnHoverText)",
        ytBorder: "var(--ytBorder)",
        ytBorderBtnHover: "var(--ytBorderBtnHover)",
        ytBorderSideBar: "var(--ytBorderSideBar)",
        ytPlaceholder: "#888888",
        ytInput: "var(--ytInput)",
        ytInputText: "var(--ytInputText)",
        ytSubtext: "var(--ytSubtext)",
        ytLink: "var(--ytLink)",
        ytModal: "var(--ytModal)"
      },
      fontFamily: {
        logo: ["var(--font-youtube-sans-semibold)"],
      },
      spacing: {
        "128": "32rem",
      }
    },
  },
  plugins: [],
};
export default config;
