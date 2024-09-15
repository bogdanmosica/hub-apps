import * as d3 from 'd3';

// group
// 'date', 'name', 'category', 'value'

export default function computeKeyframes(data: any[]) {
	const grp: Record<string, any> = {};
	data.forEach((item: { date: any }) => {
		const date = item.date;
		if (!grp[date]) {
			grp[date] = [];
		}
		grp[date].push(item);
	});
	const dateValues = Array.from(
		new Map(
			Array.from(
				d3.rollup(
					data,
					([d]) => d.value,
					(d) => +d.date,
					(d) => d.name,
				),
			).map(([date, data]) => [new Date(date), data]),
		),
	).sort(([a], [b]) =>
		d3.ascending(a as d3.Primitive | undefined, b as d3.Primitive | undefined),
	);
	console.log('dateValues', dateValues);
	const names = new Set(data.map((d) => d.name));
	const n = 12;

	function rank(value: {
		(name: any): any;
		(name: any): number;
		(name: any): any;
		(arg0: any): any;
	}) {
		const data = Array.from(names, (name) => ({
			name,
			value: value(name),
			rank: 0,
		}));
		data.sort((a, b) => d3.descending(a.value, b.value));
		for (let i = 0; i < data.length; ++i) data[i].rank = Math.min(n, i);
		return data;
	}

	const ranked = rank((name) => dateValues[0][1].get(name));
	console.log('ranked', ranked);
	const keyframes = [];
	const k = 10;
	let ka, a: { get: (arg0: any) => any }, kb, b: { get: (arg0: any) => any };
	for ([[ka, a], [kb, b]] of d3.pairs(dateValues)) {
		for (let i = 0; i < k; ++i) {
			const t = i / k;
			keyframes.push([
				// @ts-ignore
				new Date(ka * (1 - t) + kb * t),
				rank((name) => (a.get(name) || 0) * (1 - t) + (b.get(name) || 0) * t),
			]);
		}
	}
	if (kb) {
		keyframes.push([new Date(kb), rank((name) => b.get(name) || 0)]);
	}
	return keyframes;
}
