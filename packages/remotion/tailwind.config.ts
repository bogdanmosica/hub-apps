import type { Config } from 'tailwindcss';
import defaultConfig from '@repo/tailwind-config';

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
	content: ['./src/**/*.tsx'],
	presets: [defaultConfig],
};

export default config;
