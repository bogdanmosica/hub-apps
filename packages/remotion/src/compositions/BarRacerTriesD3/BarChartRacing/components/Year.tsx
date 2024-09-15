import React from 'react';

type YearProps = { year: number };
export const Year = ({ year }: YearProps) => {
	return (
		<text
			textAnchor="end"
			x={920}
			y="570"
			dy="0.32em"
			style={{ fontVariantNumeric: 'tabular-nums', fontSize: 80 }}
		>
			{year}
		</text>
	);
};
