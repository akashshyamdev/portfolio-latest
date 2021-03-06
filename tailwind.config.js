const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			purple: {
				100: '#C8A6EA',
				500: '#470589',
				600: 'rgb(124, 58, 237)',
				700: 'rgb(109, 40, 217)',
			},
			white: '#ffffff',
			gray: {
				50: '#f8f8f8',
				100: '#E1E1E1',
				300: '#BDBDBD',
				500: '#555454',
			},
			red: colors.rose,
			blue: colors.blue,
			transparent: 'transparent',
		},
		fontFamily: {
			sans: ['Nunito'],
			serif: ['Raleway'],
			mono: ['ui-monospace', 'SFMono-Regular'],
			display: ['Oswald'],
		},
		extend: {
			backgroundImage: (theme) => ({
				'radial-gradient-1': 'radial-gradient(67.15% 193.11% at 77.33% 55%, #470589 0%, #110121 100%)',
				'linear-gradient-1': 'linear-gradient(100.23deg, #470589 0%, #110121 113.84%)',
				'linear-gradient-2': 'linear-gradient(91.32deg, #FFC700 0%, #FF9283 92.68%)',
			}),
			borderColor: (theme) => ({
				'radial-gradient-1': 'radial-gradient(67.15% 193.11% at 77.33% 55%, #470589 0%, #110121 100%)',
				'linear-gradient-2': 'linear-gradient(91.32deg, #FFC700 0%, #FF9283 92.68%)',
			}),
			gridTemplateColumns: {
				'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
