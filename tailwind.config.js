/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				olive: {
					200: '#d7e6e4',
					500: '#9BC1BC',
					600: '#5d7471',
				},
				jet: {
					100: '#dad9d9',
					200: '#a2a0a0',
					300: '#696766',
					400: '#575453',
					500: '#444140',
				},
				font: {
					500: '#1E1E24',
				},
			},
		},
	},
	plugins: [],
};
