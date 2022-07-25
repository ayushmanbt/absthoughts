/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				"quicksand": ["'Quicksand'", "sans-serif"]
			}
		},
	},
	plugins: [],
	mode: "jit"
}
