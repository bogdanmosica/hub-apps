import * as d3 from 'd3';
import { DataItem, DataList, Keyframe, RankedList } from '../types';

export const computeKeyframes = (data: DataList): Keyframe[] => {
    // Group data by date
    const groupedData = d3.group(data, (d: DataItem) => d.date);

    // Convert grouped data into an array of [date, values] pairs
    const dateValues: [Date, Map<string, number>][] = Array.from(groupedData, ([date, values]): [Date, Map<string, number>] => {
      const valueMap = new Map<string, number>(values.map(d => [d.name, d.value]));
    return [new Date(date), valueMap];
  }).sort(([a], [b]) => d3.ascending(a, b));

    // Get all unique names
    const names = Array.from(new Set(data.map(d => d.name)));

    const rank = (value: (name: string) => number): RankedList => {
        const sorted = names.map(name => ({
            name,
            value: value(name) || 0,
            rank: 0, // This will be updated in the sort step
        })).sort((a, b) => d3.descending(a.value, b.value));

        sorted.forEach((d, i) => {
            d.rank = Math.min(sorted.length, i);
        });

        return sorted;
    };

    const keyframes: Keyframe[] = [];
    const k = 10; // Number of intermediate frames

    for (let i = 0; i < dateValues.length - 1; i++) {
        const [ka, a] = dateValues[i];
        const [kb, b] = dateValues[i + 1];

        for (let j = 0; j < k; j++) {
            const t = j / k;
            keyframes.push([
                new Date(ka.getTime() * (1 - t) + kb.getTime() * t),
                rank(name => (a?.get(name) || 0) * (1 - t) + (b?.get(name) || 0) * t),
            ]);
        }
    }

    // Add the final keyframe
    keyframes.push([
        new Date(dateValues[dateValues.length - 1][0]),
        rank(name => dateValues[dateValues.length - 1][1]?.get(name) || 0),
    ]);

    return keyframes;
};