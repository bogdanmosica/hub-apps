import {
	AbsoluteFill,
	continueRender,
	delayRender,
	Easing,
	interpolate,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

import computeColorByName from './utils/computeColorByName';
import computeKeyframes from './utils/computeKeyFrames';

function numberWithCommas(x: number) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const BarChartKeyFrames = ({
	colorByName,
	keyframes,
}: {
	colorByName: Map<string, string>;
	keyframes: any[];
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const curKeyframe =
		keyframes[Math.floor((frame / fps) * 10)] ||
		keyframes[keyframes.length - 1];

	const nextKeyframe =
		keyframes[Math.floor((frame / fps) * 10) + 1] ||
		keyframes[keyframes.length - 1];

	const prevItems = curKeyframe[1];
	const nextItems = nextKeyframe[1];
	const progress = interpolate(
		frame % fps, // 每30帧闪烁一次
		[0, fps],
		[0, 1],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.linear,
		},
	);
	const slideProgress = interpolate(
		frame % fps, // 每30帧闪烁一次
		[0, fps],
		[0, 1],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.cubic,
		},
	);
	console.log(
		'stats --->',
		curKeyframe[0].getFullYear(),
		nextKeyframe[0].getFullYear(),
	);
	// 分析 curKeyframe 的 最大值
	const maxValue = Math.max(
		...prevItems.map((x: any) => x.value),
		...nextItems.map((x: any) => x.value),
	);
	const maxWidth = 1000; // maybe smaller
	// const widthPerValue = 1000 / maxValue

	const rectangles = prevItems
		.slice(0, 12)
		.map(
			(prevItem: { name: string; value: number; rank: number }, idx: any) => {
				const nextItem = nextItems.filter(
					(item: { name: string }) => item.name === prevItem.name,
				)[0];
				const width =
					(1000 * prevItem.value) / maxValue +
					((1000 * (nextItem.value - prevItem.value)) / maxValue) * progress;
				const prevY = 21 + 48 * prevItem.rank;
				const nextY = 21 + 48 * nextItem.rank;
				const curY = prevY + (nextY - prevY) * slideProgress;
				console.log(
					'rect rank',
					'prev rank',
					prevItem.rank,
					nextItem.rank,
					prevY,
					nextY,
					curY,
					prevItem,
				);
				return { color: colorByName.get(prevItem.name), width, y: curY };
			},
		);

	function getTickPositions(
		scale: d3.ScaleLinear<number, number, never>,
		maxWidth: number,
	) {
		const tickCount = maxWidth / 300;
		const ticks = scale.ticks(tickCount);
		return ticks.map((t) => ({
			value: t,
			position: scale(t),
		}));
	}

	const xScale = d3.scaleLinear().domain([0, maxValue]).range([0, maxWidth]);
	const tickPositions = getTickPositions(xScale, maxWidth);
	const ticks = tickPositions.map((x, i) => {
		return {
			transform: `translate(${x.position}, 0)`,
			text: x.value,
			textY: -3,
			lineStroke: i === 0 ? 'currentColor' : 'white',
		};
	});

	const textData = prevItems
		.slice(0, 12)
		.map((prevItem: { name: any; value: number; rank: number }, idx: any) => {
			const nextItem = nextItems.filter(
				(item: { name: any }) => item.name === prevItem.name,
			)[0];
			const x =
				(1000 * prevItem.value) / maxValue +
				((1000 * (nextItem.value - prevItem.value)) / maxValue) * progress;
			const value = Math.floor(
				prevItem.value + (prevItem.value - nextItem.value) * progress,
			);
			const prevY = 21 + 48 * prevItem.rank;
			const nextY = 21 + 48 * nextItem.rank;
			const curY = prevY + (nextY - prevY) * slideProgress;
			// const targetY = 21 + 48 * curFrame.rank
			return {
				transform: `translate(${x}, ${curY})`,
				company: prevItem.name,
				value: numberWithCommas(value),
			};
		});

	return (
		<svg viewBox="0,0,1000,600">
			<g fillOpacity="0.6">
				{rectangles.map(
					(
						rect: {
							color: string | undefined;
							y: string | number | undefined;
							width: { toString: () => string | number | undefined };
						},
						index: React.Key | null | undefined,
					) => (
						<rect
							key={index}
							fill={rect.color}
							height={44}
							x={0}
							y={rect.y}
							width={rect.width.toString()}
						/>
					),
				)}
			</g>
			<g
				transform="translate(0,16)"
				fill="none"
				fontSize={10}
				textAnchor="middle"
			>
				{ticks.map((tick, index) => (
					<g
						key={index}
						className="tick"
						opacity={1}
						transform={tick.transform}
					>
						<line stroke={tick.lineStroke} y2="580.8" />
						{tick.text && (
							<text fill="currentColor" y={tick.textY} dy="0em">
								{tick.text}
							</text>
						)}
					</g>
				))}
			</g>
			<g
				textAnchor="end"
				style={{
					fontStyle: '',
					fontVariantLigatures: '',
					fontVariantNumeric: 'tabular-nums',
					fontVariantEastAsian: '',
					fontVariantAlternates: '',
					fontFeatureSettings: '',
					fontVariationSettings: '',
					fontWeight: '',
					fontStretch: '',
					fontSize: '',
					lineHeight: '',
					fontFamily: '',
				}}
			>
				{textData.map(
					(
						item: {
							transform: string | undefined;
							company:
								| string
								| number
								| boolean
								| React.ReactElement<
										any,
										string | React.JSXElementConstructor<any>
								  >
								| Iterable<React.ReactNode>
								| React.ReactPortal
								| null
								| undefined;
							value:
								| string
								| number
								| boolean
								| React.ReactElement<
										any,
										string | React.JSXElementConstructor<any>
								  >
								| Iterable<React.ReactNode>
								| React.ReactPortal
								| null
								| undefined;
						},
						index: React.Key | null | undefined,
					) => (
						<text
							key={index}
							transform={item.transform}
							y="21.5"
							x={-6}
							dy="-0.25em"
						>
							{item.company}
							<tspan fillOpacity="0.7" fontWeight="normal" x={-6} dy="1.15em">
								{item.value}
							</tspan>
						</text>
					),
				)}
			</g>
			<text
				textAnchor="end"
				x={920}
				y="570"
				dy="0.32em"
				style={{
					fontVariantNumeric: 'tabular-nums',
					fontSize: 80,
				}}
			>
				{curKeyframe[0].getFullYear()}
			</text>
		</svg>
	);
};

export const BarRace: React.FC<{}> = ({}) => {
	const [colorByName, setColorByName] = useState(new Map());
	const [keyframes, setKeyframes] = useState<any[]>([]);
	const [handle] = useState(() => delayRender());

	useEffect(() => {
		const init = async () => {
			const res = await fetch(staticFile(`/category-brands.csv`));
			const text = await res.text();
			const data = d3.csvParse(text, d3.autoType);
			const colorByName = computeColorByName(data);
			setColorByName(colorByName);
			const keyframes = computeKeyframes(data);

			setKeyframes(keyframes);
			continueRender(handle);
		};
		init();
	}, []);

	return (
		<AbsoluteFill className="bg-white p-12">
			{keyframes.length === 0 ? null : (
				<BarChartKeyFrames colorByName={colorByName} keyframes={keyframes} />
			)}
		</AbsoluteFill>
	);
};
