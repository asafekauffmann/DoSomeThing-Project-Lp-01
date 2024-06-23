/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'dark-blue': '#1A2130',
      'medium-blue': '#5A72A0',
      'light-blue': '#83B4FF',
      'lighter-blue': '#E1F7F5',
      'light-yellow': '#FDFFE2',
      'white': '#FFFFFF',
      'paragh-gray': '#959FBF',
      'dark-gray': '#1f1f1f',
      'medium-gray': '#273444',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}

