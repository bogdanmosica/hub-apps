import React from 'react';
import { AbsoluteFill } from 'remotion';
import { useBarRaceData } from '../hooks/useBarRaceData';
import { BarChartKeyFrames } from './BarChartKeyFrames';

export const BarPlotDataSet = () => {
	const { colorByName, keyframes } = useBarRaceData();

	return (
		<AbsoluteFill className="bg-white p-12">
			{keyframes.length === 0 ? null : (
				<BarChartKeyFrames colorByName={colorByName} keyframes={keyframes} />
			)}
		</AbsoluteFill>
	);
};
