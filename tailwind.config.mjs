
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono', 'Mono']
			},
			keyframes: {
				flashOut: {
					'0%, 100%': {filter: 'brightness(100%)'},
					'50%': {filter: 'brightness(140%)'}
				},
			},
			animation: {
				flashOut: 'flashOut 1s ease-in-out'
			}
		},
	},
	plugins: [],
}
