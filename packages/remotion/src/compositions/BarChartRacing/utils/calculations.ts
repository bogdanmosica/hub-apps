import { RankedItem } from "../types";

type CalculateWidthProps = { 
  prevItem: RankedItem; 
  nextItem: RankedItem; 
  maxValue: number; 
  progress: number; 
  maxWidth: number;
}
// Helper functions
export const calculateWidth = ({ 
  prevItem, 
  nextItem, 
  maxValue, 
  progress, 
  maxWidth 
}: CalculateWidthProps) => {
	return (
		(maxWidth * prevItem.value) / maxValue +
		((maxWidth * (nextItem.value - prevItem.value)) / maxValue) * progress
	);
};

type CalculateYPositionProps = {
  prevItem: RankedItem; 
  nextItem: RankedItem; 
  slideProgress: number;
}
export const calculateYPosition = ({
  prevItem, 
  nextItem, 
  slideProgress
}: CalculateYPositionProps) => {
	const prevY = 21 + 48 * (prevItem.rank ?? 1);
	const nextY = 21 + 48 * (nextItem.rank ?? 1);
	return prevY + (nextY - prevY) * slideProgress;
};