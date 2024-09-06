import * as d3 from 'd3';
import { DataList } from '../types';

export const computeColorByName = (data: DataList) => {
    const names = new Set(data.map(d => d.name));
    const colorScale = d3.scaleOrdinal()
        .domain([...names])
        .range(d3.schemeTableau10);

    const colorByName = new Map();
    data.forEach(d => {
        if (!colorByName.has(d.name)) {
            colorByName.set(d.name, colorScale(d.name));
        }
    });

    return colorByName;
};