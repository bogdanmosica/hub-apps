import React, { useState } from 'react';
// import { data, data2 } from './data';
import { BarPlot } from './BarPlot';
import useLoadData from '../hooks/useLoadData';

type BarPlotDatasetTransitionProps = {
	width: number;
	height: number;
};

export const BarPlotDatasetTransition = ({
	width,
	height,
}: BarPlotDatasetTransitionProps) => {
	const { dataByYear, dataList } = useLoadData();

	return (
		<BarPlot
			width={width}
			height={height}
			//dataByYear={dataByYear}
			dataList={dataList}
		/>
	);
};
