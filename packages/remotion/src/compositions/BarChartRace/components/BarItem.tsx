import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

type BarItemProps = {
	name: string;
	value: number;
	barHeight: number;
	barWidth: number;
	x: number;
	y: number;
};

export const BarItem = ({
	name,
	value,
	barHeight,
	barWidth,
	x,
	y: itemY,
}: BarItemProps) => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();

	const itemValue = interpolate(frame, [0, durationInFrames], [0, value]);
	//const itemY = interpolate(frame, [0, durationInFrames], [0, y]);
	const itemWidth = interpolate(frame, [0, durationInFrames], [0, barWidth]);

	return (
		<g>
			<rect
				x={x}
				y={itemY}
				width={itemWidth}
				height={barHeight}
				opacity={0.7}
				stroke="#9d174d"
				fill="#9d174d"
				fillOpacity={0.3}
				strokeWidth={1}
				rx={1}
			/>
			<text
				x={itemWidth - 7}
				y={itemY + barHeight / 2}
				textAnchor="end"
				alignmentBaseline="central"
				fontSize={12}
				opacity={barWidth > 80 ? 1 : 0}
			>
				{itemValue}
			</text>
			<text
				x={x + 7}
				y={itemY + barHeight / 2}
				textAnchor="start"
				alignmentBaseline="central"
				fontSize={12}
			>
				{name}
			</text>
		</g>
	);
};
