import React, { useMemo } from 'react';
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import * as d3 from 'd3';

import { BarItem } from './BarItem';
import { DataByYear, DataList } from '../types';

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
const BAR_PADDING = 0.5;

type BarPlotProps = {
	width: number;
	height: number;
	dataByYear?: DataByYear;
	dataList?: DataList;
	minValue?: number;
};

export const BarPlot = ({
	width,
	height,
	dataByYear,
	dataList = [],
	minValue = 10,
}: BarPlotProps) => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();

	// bounds = area inside the graph axis = calculated by subtracting the margins
	const boundsWidth = width - MARGIN.right - MARGIN.left;
	const boundsHeight = height + 150 - MARGIN.top - MARGIN.bottom;

	const [startYear, endYear] = [2000, 2020];

	const currentYear = interpolate(
		frame,
		[0, durationInFrames],
		[startYear, endYear],
	);

	const roundedYear = Math.round(currentYear);
	const prevRoundedYear = Math.round(currentYear) + 1;

	// const currentData = data.filter(d => +d.year === currentYear).sort((a, b) => +b.value - +a.value).slice(0, 10);
	// const previousData = data
	// 	.filter((d) => +d.year === previousYear)
	// 	.sort((a, b) => +b.value - +a.value)
	// 	.slice(0, 10);

	const currentData = useMemo(
		() =>
			dataByYear
				? dataByYear[roundedYear]
						?.sort((a, b) => b.value - a.value)
						?.slice(0, 10)
				: dataList
						.filter((d) => +d.date.getFullYear() === roundedYear)
						.sort((a, b) => +b.value - +a.value)
						.slice(0, 10),
		[dataByYear, dataList, roundedYear],
	);

	const previousData = useMemo(
		() =>
			dataByYear
				? dataByYear[prevRoundedYear]
						?.sort((a, b) => b.value - a.value)
						?.slice(0, 10)
				: dataList
						.filter((d) => +d.date.getFullYear() === prevRoundedYear)
						.sort((a, b) => +b.value - +a.value)
						.slice(0, 10),
		[dataByYear, dataList, prevRoundedYear],
	);

	const yScale = d3
		.scaleBand()
		.domain(currentData.map((d) => d.name))
		.range([0, boundsHeight])
		.padding(BAR_PADDING);

	// X axis
	const max = d3.max(currentData.map((d) => d.value)) ?? 0;
	const xScale = d3.scaleLinear().domain([0, max]).range([0, boundsWidth]);

	// Build the shapes
	// const allShapes = currentData.map((d) => {
	// 	return (
	// 		<BarItem
	// 			key={d.name}
	// 			name={d.name}
	// 			value={d.value}
	// 			barHeight={yScale.bandwidth()}
	// 			barWidth={xScale(d.value)}
	// 			x={xScale(0)}
	// 			y={yScale(d.name) ?? 0}
	// 		/>
	// 	);
	// });

	// return (
	// 	<div>
	// 		<svg width={width} height={height}>
	// 			<g
	// 				width={boundsWidth}
	// 				height={boundsHeight}
	// 				transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
	// 			>
	// 				{allShapes}
	// 			</g>
	// 		</svg>
	// 	</div>
	// );
	return (
		<svg width={width} height={height}>
			<text x={width / 2} y={50} textAnchor="middle" fontSize={48}>
				{currentYear}
			</text>
			{currentData.map((d, i) => {
				const previousItem = previousData.find((p) => p.name === d.name) ?? {
					name: '',
				};

				// Interpolating y-position from the previous index to the current index
				const interpolatedYScale = interpolate(
					frame,
					[0, durationInFrames],
					[yScale(d.name) ?? 0, yScale(previousItem.name) ?? 0],
					{
						extrapolateRight: 'clamp',
						extrapolateLeft: 'clamp',
						//easing: Easing. easeInOut,
					},
				);

				return (
					<BarItem
						key={d.name}
						name={d.name}
						value={d.value}
						barHeight={yScale.bandwidth()}
						barWidth={xScale(d.value)}
						x={xScale(0)}
						y={interpolatedYScale}
					/>
				);
			})}
		</svg>
	);
};
