import React, { CSSProperties } from 'react';
import { Title } from './Title';
import { useCurrentFrame, useVideoConfig } from 'remotion';

type WordsProps = {
	title: string;
	word: string;
	animation?: (progress: number) => CSSProperties;
};

const Words = ({ animation = () => ({}), title, word }: WordsProps) => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();
	const progress = frame / durationInFrames;
	console.log({ transform: animation(progress) });
	return (
		<div
			className="w-full h-full flex flex-col text-center items-center justify-center"
			style={{ ...animation(progress) }}
		>
			<Title titleColor="white" titleText={word} />
		</div>
	);
};

export default Words;
