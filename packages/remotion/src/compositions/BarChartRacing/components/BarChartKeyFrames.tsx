import React from 'react';
import * as d3 from 'd3';
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

import { Keyframe, RankedItem, TRectangle } from '../types';
import { calculateWidth, calculateYPosition } from '../utils/calculations';
import { Rectangles } from './Rectangles';
import { useProgress } from '../hooks/useProgress';
import { generateTextData, generateTicks } from '../utils/generate';
import { Ticks } from './Ticks';
import { Year } from './Year';
import { TextData } from './TextData';

type BarChartKeyFramesProps = {
	colorByName: Map<any, any>;
	keyframes: Keyframe[];
};

export const BarChartKeyFrames = ({
	colorByName,
	keyframes,
}: BarChartKeyFramesProps) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const currentKeyframe = Math.floor((frame / fps) * 10);
	const curKeyframe: Keyframe =
		keyframes[currentKeyframe] || keyframes[keyframes.length - 1];
	const nextKeyframe: Keyframe =
		keyframes[currentKeyframe + 1] || keyframes[keyframes.length - 1];

	const { progress, slideProgress } = useProgress({ frame, fps });

	const maxValue = Math.max(
		...curKeyframe[1]?.map((x: RankedItem) => x.value),
		...nextKeyframe[1]?.map((x: RankedItem) => x.value),
	);

	const maxWidth = 1000;

	const rectangles: TRectangle[] = curKeyframe[1]
		?.slice(0, 12)
		.map((prevItem) => {
			const nextItem: RankedItem = nextKeyframe[1]?.find(
				(item: RankedItem) => item.name === prevItem.name,
			) ?? { value: 0, rank: 0, name: '' };

			const width = calculateWidth({
				prevItem,
				nextItem,
				maxValue,
				progress,
				maxWidth,
			});
			const curY = calculateYPosition({ prevItem, nextItem, slideProgress });

			return { color: colorByName.get(prevItem.name), width, y: curY };
		});

	const ticks = generateTicks(maxValue, maxWidth);

	const textData = generateTextData(
		curKeyframe[1],
		nextKeyframe[1],
		maxValue,
		progress,
		slideProgress,
	);

	return (
		<svg viewBox="0,0,1000,600">
			<Rectangles rectangles={rectangles} />
			<Ticks ticks={ticks} />
			<TextData textData={textData} />
			<Year year={curKeyframe[0].getFullYear()} />
		</svg>
	);
};
