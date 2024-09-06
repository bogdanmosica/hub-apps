import React from 'react'; // Add this line to import the 'React' module

import { AbsoluteFill } from 'remotion';
import { Logo } from '../components/Logo';
import { Subtitle } from '../components/Subtitle';
import { Title } from '../components/Title';
import { z } from 'zod';
import { zColor } from '@remotion/zod-types';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

export type MyCompSchema = z.infer<typeof myCompSchema>;

export const MyComposition: React.FC<MyCompSchema> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
}) => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<div className="m-10" />
			<Logo logoColor={propThree} />
			<div className="m-3" />
			<Title titleText={propOne} titleColor={propTwo} />
			<Subtitle />
		</AbsoluteFill>
	);
};
