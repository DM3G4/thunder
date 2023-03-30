/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				blue: '#2775FF',
				emerald: '#5EEA8D',
				fuchsia: '#DD50D6',
				green: '#50D1B2',
				indigo: '#5414F1',
				orange: '#EC8C56',
				pink: '#FB7BB8',
				red: '#E23738',
				sky: '#0BD6F4',
				violet: '#7747CA',
				yellow: '#ECE663',
				dark: {
					neutral: '#1F2128',
					border: '#313442',
					0: '#000000',
					100: '#0F0F12',
					200: '#1E1E24',
					300: '#2C2C35',
					400: '#64646F',
					500: '#70707C',
					600: '#8B8B93',
					700: '#8A8A98',
					800: '#A9A9B7',
					900: '#D0D0DA',
					1000: '#EAEAF4',
					1100: '#F1F1F1',
				},
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	// TODO: Remove this if not used
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
