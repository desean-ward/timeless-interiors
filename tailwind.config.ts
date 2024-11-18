import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "sm:h-full",
    "lg:h-3/4",
    "md:h-[60%]",
    "md:w-[80%]",
    "sm:w-1/4",
    "lg:w-3/4",
    "md:right-[10%]",
    "lg:left-[12.5%]",
    "md:top-0",
    "object-cover",
    "md:rounded-full",
    "sm:absolute",
    "shadow-md",
    "shadow-white",
    "absolute",
    "lg:h-2/4",
    "md:w-[40%]",
    "sm:lg:w-1/4",
    "sm:left-0",
    "sm:right-0",
    "md:bottom-0",
    "shadow-2xl",
    "shadow-black",
    "z-10",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "grid-pattern": "url('/images/grid-background.jpg')",
        "hero-background":
          "url('https://cdn.dribbble.com/userupload/4270087/file/original-dd685e687e629f85a09d662b41578434.png?resize=1024x1024')",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
      },
      fontSize: {
        sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        xl: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
        "5xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
        "6xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@designbycode/tailwindcss-text-shadow"),
  ],
};
export default config;
