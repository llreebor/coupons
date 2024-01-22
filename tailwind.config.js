/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '15px',
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
			},
			colors: {
				primary: '#332d2f',
			},
			keyframes: {
				'fade-in': {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
			animation: {
				fadeIn: 'fade-in .3s ease',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
