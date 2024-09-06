import React from 'react';
import { Composition } from 'remotion';
import { MyComposition, myCompSchema } from './compositions/HelloWorld';

import './style.css';

import { BarRace } from './compositions/BasicBarChartRace/BarChartRace';
import {
	defaultMyCompProps,
	VIDEO_FPS,
	VIDEO_HEIGHT,
	VIDEO_WIDTH,
} from './compositions/BasicBarChartRace/utils/constants';
import { z } from 'zod';
import { BarPlotDatasetTransition } from './compositions/BarChartRace/components/BarPlotDataSet';
import { BarPlotDataSet } from './compositions/BarChartRacing/components/BarPlotDataSet';

const baseProps = {
	durationInFrames: 60 * 10,
	fps: VIDEO_FPS,
	width: VIDEO_WIDTH,
	height: VIDEO_HEIGHT,
};

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
				schema={myCompSchema}
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
		</>
	);
};
