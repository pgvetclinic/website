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
        7: 'rgba(6, 33, 38, 0.60)',
      },
      white: {
        0: '#ffffff',
      },
      red: {
        800: '#b71c1c',
      },
      background: {
        0: '#F7FCFD',
      },
    },
  },
  plugins: [],
};
export default config;
