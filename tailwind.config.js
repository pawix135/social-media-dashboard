/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "primary-lime": "hsl(163, 72%, 41%)",
        "primary-red": "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        "instagram-from": "hsl(37, 97%, 70%)",
        "instagram-to": "hsl(329, 70%, 58%)",
        youtube: "hsl(348, 97%, 39%)",
        // Dark theme
        "dark-card-bg": "hsl(228, 28%, 20%)",
        "dark-bg": "hsl(230, 17%, 14%)",
        "dark-top-bg": "hsl(232, 19%, 15%)",
        "dark-desaturated-blue": "hsl(228, 34%, 66%)",
        "dark-text": "hsl(0, 0%, 100%)",
        "dark-toggle-from": "hsl(210, 78%, 56%)",
        "dark-toggle-to": "hsl(146, 68%, 55%)",
        // Light theme
        "light-card-bg": "hsl(227, 47%, 96%)",
        "light-bg": "hsl(0, 0%, 98%)",
        "light-top-bg": "hsl(225, 100%, 98%)",
        "light-dark-greyish-blue": "hsl(228, 12%, 44%)",
        "light-dark-blue": " hsl(230, 17%, 14%)",
        "light-toggle": "hsl(230, 22%, 74%)",
        // Toggle
      },
    },
  },
  plugins: [],
};
