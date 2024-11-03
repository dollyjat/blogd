import type { Config } from 'tailwindcss';
import tailwindcssanimated from 'tailwindcss-animated';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				bg: {
					layout: 'var(--bg-layout)',
					box: 'var(--bg-box)'
				},
				text: {
					layout: 'var(--text-layout)',
					small: 'var(--text-small)'
				}
			}
		}
	},

	plugins: [tailwindcssanimated]
} satisfies Config;
