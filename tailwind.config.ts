import type { Config } from 'tailwindcss';

const config: Config = {
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
    },
    colors: {
      black: {
        primary: 'rgba(6, 33, 38, 1)',
        7: 'rgba(6, 33, 38, 0.60)',
        8: 'rgba(6, 33, 38, 0.7)',
        9: 'rgba(6, 33, 38, 0.8)',
      },
      white: {
        0: '#ffffff',
        1: 'rgba(244, 245, 244, 1)',
      },
      blue: {
        primary: 'rgba(40, 118, 232, 0.84)',
      },
      brown: {
        primary: 'rgba(207, 125, 78, 1)',
      },
      background: {
        0: '#F7FCFD',
      },
    },
  },
  plugins: [],
};
export default config;
