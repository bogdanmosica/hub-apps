import React from 'react'; // Add this line to import the 'React' module

import { z } from 'zod';
import { zColor } from '@remotion/zod-types';
import { Sequence, useCurrentFrame, useVideoConfig } from 'remotion';
import { Title } from '../../components/Title';
import { flattenAnimations } from '../../constants/FlattenAnimations';
import Words from '../../components/Word';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

export type MyCompSchema = z.infer<typeof myCompSchema>;

export const AllAnimationsComposition: React.FC<MyCompSchema> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
}) => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();
	const progress = frame / durationInFrames;
	return (
		<>
			{flattenAnimations.map(({ animation, title, word }, index) => (
				<Sequence
					durationInFrames={100}
					from={100 * index}
					key={index}
					layout="none"
				>
					<Words title={title} word={word} animation={animation} />
				</Sequence>
			))}
		</>
	);
};
