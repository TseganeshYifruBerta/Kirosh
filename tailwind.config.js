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
        "primary" : "#ED7966",
        "primary-color" : "#000000",
        "card-bg" : "#F7F4F4",
        
      },
      fontFamily: {
        'primary-font': ['Chela One', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
