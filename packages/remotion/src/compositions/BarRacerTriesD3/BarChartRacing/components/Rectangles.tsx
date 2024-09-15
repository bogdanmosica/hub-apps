import React from 'react';

type TRectangle = {
	color: string;
	y: number;
	width: number;
};

type RectanglesProps = {
	rectangles: TRectangle[];
};
export const Rectangles = ({ rectangles }: RectanglesProps) => {
	return (
		<g fillOpacity="0.6">
			{rectangles.map((rect, index) => (
				<rect
					key={index}
					fill={rect.color}
					height={44}
					x={0}
					y={rect.y}
					width={rect.width.toString()}
				/>
			))}
		</g>
	);
};
