/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
        Awhite: '#FFFFFF'
      },
      fontFamily: {
        pretendard_bold: "url('/font/Pretendard-Bold.otf')",
        pretendard_medium: "url('/font/Pretendard-Medium.otf')",
        pretendard_regular: "url('/font/Pretendard-Regular.otf')",
        pretendard_semibold: "url('/font/Pretendard-SemiBold.otf')",
        rixhead_extrabold: "url('/font/RixHead_Pro ExtraBold.otf')",
        rixhead_medium: "url('/font/RixHead_Pro Medium.otf')",
        rixgulim_medium: "url('/font/RixJGulim_Pro Medium.otf')"
      }
    },
  },
  plugins: [],
}
