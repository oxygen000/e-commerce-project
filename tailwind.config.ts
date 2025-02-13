import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // دعم الوضع الليلي عبر `class`
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFC107", // اللون الأساسي (أصفر)
        secondary: "#1E293B", // لون ثانوي غامق (للداكن)
        background: {
          DEFAULT: "#ffffff", // خلفية الفاتح
          dark: "#121212", // خلفية الداكن
        },
        foreground: {
          DEFAULT: "#1E293B", // لون النص في الفاتح
          dark: "#F8FAFC", // لون النص في الداكن
        },
        yellow: {
          50: "#FFF8E1", // ألوان صفراء فاتحة
          100: "#FFECB3",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFCA28", 
          500: "#FFC107", // اللون الأصفر الأساسي
          600: "#FFB300", 
          700: "#FFA000", 
          800: "#FF8F00", 
          900: "#FF6F00", // ألوان صفراء غامقة
        },
        gray: {
          50: "#F9FAFB", // رمادي فاتح في الوضع الداكن
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF", 
          500: "#6B7280", 
          600: "#4B5563", 
          700: "#374151", 
          800: "#1F2937", 
          900: "#111827", // رمادي داكن
        },
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
