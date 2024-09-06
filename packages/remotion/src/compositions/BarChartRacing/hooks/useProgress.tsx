import { Easing, interpolate } from 'remotion';

type UseProgressProps = {
	frame: number;
	fps: number;
};

export const useProgress = ({ frame, fps }: UseProgressProps) => {
	const progress = interpolate(frame % fps, [0, fps], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.linear,
	});

	const slideProgress = interpolate(frame % fps, [0, fps], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.cubic,
	});

	return { progress, slideProgress };
};
