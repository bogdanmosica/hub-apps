import { interpolate, useVideoConfig } from 'remotion';
import { useCurrentFrame } from 'remotion';
import React from 'react';

export const Title: React.FC<{
	titleText: string;
	titleColor: string;
	animation?: (progress: number) => string;
}> = ({ titleText, titleColor, animation = () => '' }) => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();
	const progress = frame / durationInFrames;
	const opacity = interpolate(frame, [20, 40], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div className="text-7xl text-white font-bold leading-relaxed">
			{titleText}
		</div>
	);
};
