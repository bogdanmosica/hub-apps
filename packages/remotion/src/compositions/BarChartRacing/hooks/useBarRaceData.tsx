import { useEffect, useState } from 'react';
import { continueRender, delayRender, staticFile } from 'remotion';

import * as d3 from 'd3';

import { computeColorByName } from '../utils/computeColorByName';
import { computeKeyframes } from '../utils/computeKeyframes';
import { DataList, Keyframe } from '../types';

export const useBarRaceData = (csvPath = '') => {
	const [colorByName, setColorByName] = useState(new Map());
	const [keyframes, setKeyframes] = useState<Keyframe[]>([]);
	const [handle] = useState(() => delayRender());

	useEffect(() => {
		const init = async () => {
			const res = await fetch(staticFile(`/category-brands.csv`));
			const text = await res.text();
			const data = (d3.csvParse(text, d3.autoType) as DataList) ?? [];

			const colorByName = computeColorByName(data);
			const keyframes = computeKeyframes(data);
			setColorByName(colorByName);

			setKeyframes(keyframes);
			continueRender(handle);
		};
		init();
	}, [csvPath]);

	return { colorByName, keyframes };
};
