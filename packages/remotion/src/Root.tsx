import React from 'react';
import { Composition } from 'remotion';
import { MyComposition, myCompSchema } from './compositions/HelloWorld';

import './style.css';

import { BarRace } from './compositions/BarRacerTriesD3/BasicBarChartRace/BarChartRace';
import {
	defaultMyCompProps,
	VIDEO_FPS,
	VIDEO_HEIGHT,
	VIDEO_WIDTH,
} from './compositions/BarRacerTriesD3/BasicBarChartRace/utils/constants';
import { z } from 'zod';
import { BarPlotDatasetTransition } from './compositions/BarRacerTriesD3/BarChartRace/components/BarPlotDataSet';
import { BarPlotDataSet } from './compositions/BarRacerTriesD3/BarChartRacing/components/BarPlotDataSet';
import { BarChartRaceComposition } from './compositions/BarRacerTriesD3/ChartBarRacer';
import useLoadData from './compositions/BarRacerTriesD3/BarChartRace/hooks/useLoadData';
import { AllAnimationsComposition } from './compositions/AllAnimations';
import { flattenAnimations } from './constants/FlattenAnimations';
import { AbstractComposition } from './compositions/AbstractComposition';

const baseProps = {
	durationInFrames: 60 * 10,
	fps: VIDEO_FPS,
	width: VIDEO_WIDTH,
	height: VIDEO_HEIGHT,
};

export const RemotionRoot: React.FC = () => {
	const { dataByYear, dataList: data } = useLoadData();
	const fps = 30;

	// Extract years and sort them
	const years = Array.from(new Set(data.map((d) => d.date.getFullYear()))).sort(
		(a, b) => a - b,
	);

	const framesPerYear = fps * 1; // 1 second per year
	baseProps.durationInFrames = (years.length - 1) * framesPerYear;

	const texts = ['Welcome', 'To', 'Remotion'];
	const videoUrl =
		'https://videos.pexels.com/video-files/15932548/15932548-hd_1080_1920_30fps.mp4';
	const audioUrl =
		'https://cdn.pixabay.com/audio/2024/09/16/audio_a10608d6cd.mp3';
	const isMobile = false;
	let orientation = 'portrait';

	const textDuration = fps * 2;
	const totalDuration = texts.length * textDuration;

	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
				schema={myCompSchema as any}
				defaultProps={{
					titleText: 'Welcome to Remotion with Tailwind CSS',
					titleColor: '#000000',
					logoColor: '#00bfff',
				}}
			/>
			<Composition
				id="basic-bar-race"
				component={BarRace}
				{...baseProps}
				fps={60}
				durationInFrames={24 * 60}
				defaultProps={defaultMyCompProps}
			/>
			<Composition
				id="abstract-composition"
				component={AbstractComposition as any}
				{...baseProps}
				durationInFrames={totalDuration}
				fps={fps}
				width={orientation === 'portrait' ? 720 : 1280}
				height={orientation === 'portrait' ? 1280 : 720}
				defaultProps={{
					texts,
					videoUrl,
					audioUrl,
					isMobile,
					orientation,
				}}
			/>
			<Composition
				id="bar-chart-race"
				component={BarPlotDatasetTransition}
				{...baseProps}
				fps={30}
				durationInFrames={20 * 30}
				defaultProps={{ height: VIDEO_HEIGHT, width: VIDEO_WIDTH }}
			/>
			<Composition
				id="bar-chart-racing"
				component={BarPlotDataSet}
				{...baseProps}
				fps={60}
				durationInFrames={20 * 60}
				defaultProps={{ height: VIDEO_HEIGHT, width: VIDEO_WIDTH }}
			/>
			<Composition
				id="bar-chart-racing-v2"
				component={BarChartRaceComposition as any}
				{...baseProps}
				fps={60}
				durationInFrames={20 * 60}
				defaultProps={{ data, topN: 10 }}
			/>
			<Composition
				id="all-animations"
				component={AllAnimationsComposition as any}
				{...baseProps}
				fps={30}
				durationInFrames={flattenAnimations.length * 100}
				defaultProps={{ data, topN: 10 }}
			/>
		</>
	);
};
