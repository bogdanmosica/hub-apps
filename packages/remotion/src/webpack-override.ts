import { enableTailwind } from '@remotion/tailwind';
import { WebpackOverrideFn } from '@remotion/bundler';
import path from 'path';

export const webpackOverride: WebpackOverrideFn = (currentConfiguration) => {
	return enableTailwind({
		...currentConfiguration,
		resolve: {
			...currentConfiguration.resolve,
			alias: {
				...(currentConfiguration.resolve?.alias ?? {}),
				"@/animations": path.join(process.cwd(), 'src', 'animations'),				
				"@/compositions": path.join(process.cwd(), 'src', 'compositions'),
				"@/interpolations": path.join(process.cwd(), 'src', 'interpolations'),
				"@/components": path.join(process.cwd(), 'src', 'components'),
				"@/constants": path.join(process.cwd(), 'src', 'constants'),
			},
		},
	});
};
