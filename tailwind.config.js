/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        // color used for the website 
        colors: {
          primary: '#F37046',
          phover: '#fd5a23',
          slight: '#1a618d12',
          secondary: '#0D3249',
          darkblue: '#2E5D9B',
          light: "#A5C7E9",
          bglight: '#f5f5f5'
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
      },
  },
  plugins: [],
}

