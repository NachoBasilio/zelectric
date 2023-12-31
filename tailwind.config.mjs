/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	darkMode: 'media',
	theme: {
		extend: {},
		colors:{
			'zelectric-dark-blue': {  
				DEFAULT: '#0303B5',  
				50: '#7373FD',  
				100: '#5F5FFC',  
				200: '#3737FC',  
				300: '#0F0FFB',  
				400: '#0404DD',  
				500: '#0303B5',  
				600: '#02027E',  
				700: '#010147',  
				800: '#00000F',  
				900: '#000000',  
				950: '#000000'
			},
			'zelectric-blue': {
				DEFAULT: '#0404E2',
				50: '#A0A0FD',
				100: '#8C8CFD',
				200: '#6464FC',
				300: '#3C3CFC',
				400: '#1414FB',
				500: '#0404E2',
				600: '#0303AB',
				700: '#020274',
				800: '#01013D',
				900: '#000006',
				950: '#000000'
			},
			'zelectric-ribbon': {
				DEFAULT: '#4040FB',
				50: '#F4F4FF',
				100: '#E0E0FE',
				200: '#B8B8FE',
				300: '#9090FD',
				400: '#6868FC',
				500: '#4040FB',
				600: '#0909FA',
				700: '#0404C7',
				800: '#030390',
				900: '#020259',
				950: '#01013D'
			},
			'zelectric-mango-tango': {
				DEFAULT: '#E28000',
				50: '#FFD39B',
				100: '#FFCB86',
				200: '#FFB95D',
				300: '#FFA735',
				400: '#FF960C',
				500: '#E28000',
				600: '#AA6000',
				700: '#724000',
				800: '#3A2100',
				900: '#020100',
				950: '#000000'
			},
			'zelectric-pizazz': {
				DEFAULT: '#FF9800',
				50: '#FFE2B8',
				100: '#FFDAA3',
				200: '#FFC97A',
				300: '#FFB952',
				400: '#FFA829',
				500: '#FF9800',
				600: '#C77700',
				700: '#8F5500',
				800: '#573400',
				900: '#1F1200',
				950: '#030200'
			},
			'zelectric-candlelight': {
				DEFAULT: '#FDD620',
				50: '#FFF7D6',
				100: '#FEF4C2',
				200: '#FEEC99',
				300: '#FEE571',
				400: '#FDDD48',
				500: '#FDD620',
				600: '#E3BB02',
				700: '#AB8D02',
				800: '#745F01',
				900: '#3C3201',
				950: '#201B00'
			},
			'yellow-zelectric':{
				DEFAULT: '#FF9800'
			},
			'dark-zelectic':{
				DEFAULT: '#1A1A1A'
			}
		}
	},
	plugins: [
		require('flowbite/plugin')
	],
}
