/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': "575px",
      'md': "715px",
      // lg: "1025px",
      'lg':"1290px",
      // 'lg': "1430px",
      '2xl': "1653px",
      'screen-w': "2000px",
      // 'screen-h': "2000px"
      // xl: "1202px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      accent: "#8358FF",
      "accent-dark": "#7444FF",
      "accent-light": "#9E7CFF",
      "accent-lighter": "#B9A0FF",
      "light-base": "#F5F8FA",
      green: "#10b981",
      orange: "#FEB240",
      red: "#EF4444",
      blue: "#428AF8",
      jacarta: {
        base: "#5A5D79",
        50: "#F4F4F6",
        100: "#E7E8EC",
        200: "#C4C5CF",
        300: "#A1A2B3",
        400: "#7D7F96",
        500: "#5A5D79",
        600: "#363A5D",
        700: "#131740",
        800: "#101436",
        900: "#0D102D",
      },
    },
    boxShadow: {
      none: "none",
      sm: "0px 1px 2px 0px rgba(13, 16, 45, 0.1)",
      base: "0px 1px 2px -1px rgba(13, 16, 45, 0.1), 0px 2px 4px 0px rgba(13, 16, 45, 0.1)",
      md: "0px 2px 4px -2px rgba(13, 16, 45, 0.1), 0px 4px 6px -1px rgba(13, 16, 45, 0.1)",
      lg: "0px 4px 6px -4px rgba(13, 16, 45, 0.1), 0px 10px 15px -3px rgba(13, 16, 45, 0.1)",
      xl: "0px 8px 10px -6px rgba(13, 16, 45, 0.1), 0px 20px 25px -5px rgba(13, 16, 45, 0.1)",
      "screen-w":
        "0px 25px 50px -12px rgba(13, 16, 45, 0.1), 0px 12px 24px 0px rgba(13, 16, 45, 0.1)",
      "accent-volume":
        "5px 5px 10px rgba(108, 106, 213, 0.25), inset 2px 2px 6px #A78DF0, inset -5px -5px 10px #6336E4",
      "white-volume":
        "5px 5px 10px rgba(108, 106, 212, 0.25), inset 2px 2px 6px #EEF1F9, inset -5px -5px 10px #DFE3EF",
    },
    // fontSize: {
    //   xs: ["0.75rem", { lineHeight: "normal" }],
    //   "2xs": ["0.8125rem", { lineHeight: "normal" }],
    //   sm: ["0.875rem", { lineHeight: "normal" }],
    //   base: ["1rem", { lineHeight: "normal" }],
    //   lg: ["1.25rem", { lineHeight: "normal" }],
    //   xl: ["1.5rem", { lineHeight: "normal" }],
    //   "screen-w": ["1.75rem", { lineHeight: "normal" }],
    //   "3xl": ["2rem", { lineHeight: "normal" }],
    //   "4xl": ["2.25rem", { lineHeight: "normal" }],
    //   "5xl": ["2.5rem", { lineHeight: "normal" }],
    //   "6xl": ["3.5rem", { lineHeight: "normal" }],
    //   "7xl": ["4.25rem", { lineHeight: "normal" }],
    // },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        Agradient: '#92ABFF',
        Bgradient: '#5D60FF',
        Apurple: '#4B49AB',
        Bpurple: '#5A58C0',
        Cpurple: '#6460FE',
        Dpurple: '#6B75E3',
        Agrey: '#363636',
        Bgrey: '#404040',
        Cgrey: '#636363',
        Dgrey: '#D9D9D9',
        Awhite: '#FFFFFF',
        Ablack: '#000000',
        Ablue: '#18287f',
        Bblue: '#5c92de',
      },
      fontFamily: {
        pretendard_bold: "url('/font/Pretendard-Bold.otf')",
        pretendard_medium: "url('/font/Pretendard-Medium.otf')",
        pretendard_regular: "url('/font/Pretendard-Regular.otf')",
        pretendard_semibold: "url('/font/Pretendard-SemiBold.otf')",
        rixhead_extrabold: "url('/font/RixHead_Pro ExtraBold.otf')",
        rixhead_medium: "url('/font/RixHead_Pro Medium.otf')",
        rixgulim_medium: "url('/font/RixJGulim_Pro Medium.otf')"
      },
      borderRadius: {
        "2lg": "0.625rem",
      },
      transitionProperty: {
        height: "height",
        width: "width",
      },
      animation: {
        fly: "fly 6s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
        heartBeat: "heartBeat 1s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
        progress: "progress 5s linear",
      },
      keyframes: {
        fly: {
          "0%, 100%": { transform: "translateY(5%)" },
          "50%": { transform: "translateY(0)" },
        },
        heartBeat: {
          "0%, 40%, 80%, 100%": { transform: "scale(1.1)" },
          "20%, 60%": { transform: "scale(.8)" },
        },
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
}
