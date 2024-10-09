import { CSSProperties } from 'react';
import { AnimationsDictionary } from './AnimationsDictionary';

type FlatAnimationReducerReturnType = {
	title: string;
	animation: (progress: number) => CSSProperties;
	word: string;
};

export const flattenAnimations = Object.entries(AnimationsDictionary).reduce<
	FlatAnimationReducerReturnType[]
>(
	(
		acc,
		[title, animations]: [string, Record<string, (progress: number) => CSSProperties>],
	) => {
		const flatAnimations = Object.keys(animations).map((key) => ({
			title, // Category name (e.g., attentionSeekers, backEntrances)
			animation: animations[key], // The actual animation function
			word: key, // The animation key name (e.g., heartBeat, jello)
		}));
		return [...acc, ...flatAnimations];
	},
	[],
);
