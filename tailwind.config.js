module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors:{
				'bright_oragne': 'hsl(31, 77%, 52%)',
				'dark_cyan': 'hsl(184, 100%, 22%)',
				'v_dard_cyan': 'hsl(179, 100%, 13%)',
			},
			inset: {
				"90": "90vh",
				"180": "180vh",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
