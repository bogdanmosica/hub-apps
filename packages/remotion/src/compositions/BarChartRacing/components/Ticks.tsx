import React from 'react';

type TicksProps = {
	ticks: {
		transform: string;
		lineStroke: string;
		text: number;
		textY: number;
	}[];
};

export const Ticks = ({ ticks }: TicksProps) => {
	return (
		<g
			transform="translate(0,16)"
			fill="none"
			fontSize={10}
			textAnchor="middle"
		>
			{ticks.map((tick, index) => (
				<g key={index} className="tick" opacity={1} transform={tick.transform}>
					<line stroke={tick.lineStroke} y2="580.8" />
					{tick.text && (
						<text fill="currentColor" y={tick.textY} dy="0em">
							{tick.text}
						</text>
					)}
				</g>
			))}
		</g>
	);
};
