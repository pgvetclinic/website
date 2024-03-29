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
        2: 'rgba(6, 33, 38, 0.10)',
        4: 'rgba(6, 33, 38, 0.30)',
        5: 'rgba(6, 33, 38, 0.40)',
        7: 'rgba(6, 33, 38, 0.60)',
        8: 'rgba(6, 33, 38, 0.7)',
        9: 'rgba(6, 33, 38, 0.8)',
      },
      white: {
        0: 'rgba(255, 255, 255, 1)',
        1: 'rgba(244, 245, 244, 1)',
      },
      blue: {
        primary: 'rgba(40, 118, 232, 0.84)',
        secondary: 'rgba(36, 190, 224, 0.10)',
        page: 'rgba(247, 252, 253, 1)',
        footer: 'rgba(36, 190, 224, 0.1)',
      },
      brown: {
        primary: 'rgba(207, 125, 78, 1)',
        secondary: 'rgba(207, 125, 78, 0.05)',
      },
    },
  },
  plugins: [],
};
export default config;
