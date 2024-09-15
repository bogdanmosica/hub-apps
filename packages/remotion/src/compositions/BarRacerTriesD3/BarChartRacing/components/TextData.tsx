import React from 'react';
type TextDataProps = {
	textData: {
		company: string;
		value: string;
		transform: string;
	}[];
};
export const TextData = ({ textData }: TextDataProps) => {
	return (
		<g textAnchor="end" style={{ fontVariantNumeric: 'tabular-nums' }}>
			{textData.map((item, index) => (
				<text
					key={index}
					transform={item.transform}
					y="21.5"
					x={-6}
					dy="-0.25em"
				>
					{item.company}
					<tspan fillOpacity="0.7" fontWeight="normal" x={-6} dy="1.15em">
						{item.value}
					</tspan>
				</text>
			))}
		</g>
	);
};
