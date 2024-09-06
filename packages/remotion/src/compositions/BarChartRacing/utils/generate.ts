import * as d3 from 'd3';
import { calculateWidth, calculateYPosition } from './calculations';
import { RankedItem } from '../types';

export const numberWithCommas = (x: number) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const generateTicks = (maxValue: number, maxWidth: number) => {
	const xScale = d3.scaleLinear().domain([0, maxValue]).range([0, maxWidth]);
	const tickPositions = xScale
		.ticks(maxWidth / 300)
		.map((t) => ({ value: t, position: xScale(t) }));

	return tickPositions.map((tick, i) => ({
		transform: `translate(${tick.position}, 0)`,
		text: tick.value,
		textY: -3,
		lineStroke: i === 0 ? 'currentColor' : 'white',
	}));
};

export const generateTextData = (
	prevItems: any[],
	nextItems: any[],
	maxValue: number,
	progress: number,
	slideProgress: number,
) => {
	return prevItems.slice(0, 12).map((prevItem, idx) => {
		const nextItem = nextItems.find((item) => item.name === prevItem.name);
		const x =
			(1000 * prevItem.value) / maxValue +
			((1000 * (nextItem.value - prevItem.value)) / maxValue) * progress;
		const value = Math.floor(
			prevItem.value + (prevItem.value - nextItem.value) * progress,
		);
		const curY = calculateYPosition({ prevItem, nextItem, slideProgress });

		return {
			transform: `translate(${x}, ${curY})`,
			company: prevItem.name,
			value: numberWithCommas(value),
		};
	});
};