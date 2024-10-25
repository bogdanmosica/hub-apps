// AbstractComposition.tsx

import React from 'react';
import {
	Sequence,
	Video,
	Audio,
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
} from 'remotion';
import 'tailwindcss/tailwind.css';
import { cn } from '@hub/utils';

export type AbstractCompositionProps = {
	texts: string[];
	videoUrl: string;
	audioUrl: string;
	isMobile: boolean;
	orientation: 'portrait' | 'landscape';
};

export const AbstractComposition: React.FC<AbstractCompositionProps> = ({
	texts,
	videoUrl,
	audioUrl,
	isMobile,
	orientation,
}) => {
	const fps = 30;
	const textDuration = fps * 2; // Each text shows for 2 seconds
	const totalDuration = texts.length * textDuration;
	const frame = useCurrentFrame();

	const containerClass = cn(
		'w-full h-full',
		isMobile ? 'p-4' : 'p-8',
		orientation === 'portrait' ? 'flex flex-col' : 'flex flex-row',
	);

	return (
		<AbsoluteFill className={containerClass}>
			{/* Video Background */}
			<Video src={videoUrl} className="w-full h-full object-cover" />

			{/* Overlay Texts */}
			{texts.map((text, index) => (
				<Sequence
					from={index * textDuration}
					durationInFrames={textDuration}
					key={index}
				>
					<AbsoluteFill className="flex items-center justify-center">
						<p
							className="text-white text-4xl font-bold"
							style={{
								opacity: interpolate(
									frame - index * textDuration,
									[0, 15, textDuration - 15, textDuration],
									[0, 1, 1, 0],
								),
							}}
						>
							{text}
						</p>
					</AbsoluteFill>
				</Sequence>
			))}

			{/* Audio */}
			<Audio src={audioUrl} />
		</AbsoluteFill>
	);
};
