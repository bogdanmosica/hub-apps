// BarChartRaceComposition.tsx

import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import * as d3 from 'd3';

export type Data = {
  date: Date;
  category: string;
  name: string;
  value: number;
};

export type DataList = Data[];

interface BarChartRaceProps {
  data: DataList;
  topN: number;
}

export const BarChartRaceComposition: React.FC<BarChartRaceProps> = ({ data, topN }) => {
  const frame = useCurrentFrame();
  const fps = 30;
  const width = 800;
  const height = 450;
  const margin = { top: 20, right: 20, bottom: 20, left: 150 };

  // Extract years and sort them
  const years = Array.from(new Set(data.map((d) => d.date.getFullYear()))).sort(
    (a, b) => a - b
  );

  // Calculate frames per year transition
  const framesPerYear = fps * 1; // 1 second per year
  const totalFrames = (years.length - 1) * framesPerYear;

  // Determine current frame's years and progress
  const currentYearIndex = Math.floor(frame / framesPerYear);
  const progressInYear = (frame % framesPerYear) / framesPerYear;

  // Handle end of data
  if (currentYearIndex >= years.length - 1) {
    return null;
  }

  const currentYear = years[currentYearIndex];
  const nextYear = years[currentYearIndex + 1];

  // Get data for current and next years
  const getDataForYear = (year: number) =>
    data.filter((d) => d.date.getFullYear() === year);

  const currentYearData = getDataForYear(currentYear);
  const nextYearData = getDataForYear(nextYear);

  // Combine names from both years
  const allNames = Array.from(
    new Set([...currentYearData, ...nextYearData].map((d) => d.name))
  );

  // Create a map of name to interpolated values
  const interpolatedData = allNames.map((name) => {
    const startValue =
      currentYearData.find((d) => d.name === name)?.value || 0;
    const endValue = nextYearData.find((d) => d.name === name)?.value || 0;
    const value = interpolate(progressInYear, [0, 1], [startValue, endValue], {
      easing: Easing.linear,
    });
    return { name, value };
  });

  // Sort by interpolated value and take top N
  const topData = interpolatedData
    .sort((a, b) => b.value - a.value || a.name.localeCompare(b.name))
    .slice(0, topN);

  // Build rank map to track positions over time
  const rankMap = new Map<string, number>();
  topData.forEach((d, i) => rankMap.set(d.name, i));

  // Define scales
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(topData, (d) => d.value) || 1])
    .range([margin.left, width - margin.right]);

  const yScale = d3
    .scaleBand<string>()
    .domain(topData.map((d) => d.name))
    .range([margin.top, height - margin.bottom])
    .padding(0.1);

  // Render bars
  return (
    <svg width={width} height={height}>
      {topData.map((d) => {
        const y = yScale(d.name);
        const barWidth = xScale(d.value) - margin.left;

        // Fade in/out bars entering/exiting
        const isEntering = !currentYearData.some((item) => item.name === d.name);
        const isExiting = !nextYearData.some((item) => item.name === d.name);
        const opacity = isEntering
          ? interpolate(progressInYear, [0, 0.2], [0, 1], {
              extrapolateRight: 'clamp',
            })
          : isExiting
          ? interpolate(progressInYear, [0.8, 1], [1, 0], {
              extrapolateLeft: 'clamp',
            })
          : 1;

        return (
          <g key={d.name} transform={`translate(0, ${y})`} opacity={opacity}>
            <rect
              x={margin.left}
              y={0}
              width={barWidth}
              height={yScale.bandwidth()}
              fill="#69b3a2"
            />
            <text
              x={margin.left - 10}
              y={yScale.bandwidth() / 2}
              dy=".35em"
              fontSize="14"
              fill="black"
              textAnchor="end"
            >
              {d.name}
            </text>
            <text
              x={margin.left + barWidth + 5}
              y={yScale.bandwidth() / 2}
              dy=".35em"
              fontSize="14"
              fill="black"
              textAnchor="start"
            >
              {Math.round(d.value)}
            </text>
          </g>
        );
      })}
      {/* Display current year */}
      <text
        x={width - margin.right}
        y={height - margin.bottom}
        fontSize="32"
        textAnchor="end"
        fill="gray"
      >
        {currentYear}
      </text>
    </svg>
  );
};
