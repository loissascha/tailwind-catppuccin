/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'mocha': {
					'base': '#1e1e2e',  
					'mantle': '#181825',
					'crust': '#11111b',
					'surface0': '#313244',
					'surface1': '#45475a',
					'surface2': '#585b70',
					'overlay0': '#6c7086',
					'overlay1': '#7f849c',
					'overlay2': '#9399b2',
					'subtext0': '#a6adc8',
					'subtext1': '#bac2de',
					'text': '#cdd6f4',
					'lavender': '#b4befe',
					'blue': '#89b4fa',
					'sapphire': '#74c7ec',
					'sky': '#89dceb',
					'teal': '#94e2d5',
					'green': '#a6e3a1',
					'yellow': '#f9e2af',
					'peach': '#fab387',
					'maroon': '#eba0ac',
					'red': '#f38ba8',
					'mauve': '#cba6f7',
					'pink': '#f5c2e7',
					'flamingo': '#f2cdcd',
					'rosewater': '#f5e0dc'
				},
				'macchiato': {
					'base': '#24273a',
					'mantle': '#1e2030',
					'crust': '#181926',
					'surface0': '#363a4f',
					'surface1': '#494d64',
					'surface2': '#5b6078',
					'overlay0': '#6e738d',
					'overlay1': '#8087a2',
					'overlay2': '#939ab7',
					'subtext0': '#a5adcb',
					'subtext1': '#b8c0e0',
					'text': '#cad3f5',
					'lavender': '#b7bdf8',
					'blue': '#8aadf4',
					'sapphire': '#7dc4e4',
					'sky': '#91d7e3',
					'teal': '#8bd5ca',
					'green': '#a6da95',
					'yellow': '#eed49f',
					'peach': '#f5a97f',
					'maroon': '#ee99a0',
					'red': '#ed8796',
					'mauve': '#c6a0f6',
					'pink': '#f5bde6',
					'flamingo': '#f0c6c6',
					'rosewater': '#f4dbd6'
				}
			}
		},
	},
	plugins: [],
}
