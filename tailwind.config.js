/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

	colors: {
		transparent: 'transparent',
		'modalblack': '#000000d1'
	}
    },
  },
  plugins: [],
}
