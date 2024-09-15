import * as d3 from 'd3';

type DataItem = { color: string; name: string };

export default function computeColorByName(data: any) {
	const colorByName = new Map(
		data.map((d: { name: any; color: any }) => [d.name, d.color]),
	);

	const category = new Set(data.map((d: Pick<DataItem, 'name'>) => d.name));

	const color = d3
		.scaleOrdinal()
		//@ts-ignore
		.domain(Array.from<string>(category))
		.range(d3.schemeTableau10) as (name: string) => string;

	data.forEach((item: DataItem) => {
		item.color = color(item.name);
		colorByName.set(item.name, item.color);
	});
	return colorByName;
}
