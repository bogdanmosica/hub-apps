import { useEffect, useState } from 'react';
import { staticFile } from 'remotion';
import * as d3 from 'd3';
import { Data, DataList } from '../types';

const useLoadData = () => {
	const [dataByYear, setDataByYear] = useState({});
	const [dataList, setDataList] = useState<DataList>([]);

	useEffect(() => {
		const init = async () => {
			const res = await fetch(staticFile(`/category-brands.csv`));
			const text = await res.text();
			const data = (d3.csvParse(text, d3.autoType) as DataList) ?? [];

			const structuredData = data.reduce(
				(acc: Record<number, DataList>, row) => {
					const year = row.date.getFullYear();
					if (!acc[year]) acc[year] = [];
					acc[year].push(row);
					return acc;
				},
				{},
			);
			setDataByYear(structuredData);
			setDataList(data);
		};
		init();
	}, []);

	return { dataByYear, dataList };
};

export default useLoadData;
