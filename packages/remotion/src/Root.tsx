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
    (a, b) => a - b
  );

  const framesPerYear = fps * 1; // 1 second per year
  baseProps.durationInFrames = (years.length - 1) * framesPerYear;

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
		</>
	);
};
