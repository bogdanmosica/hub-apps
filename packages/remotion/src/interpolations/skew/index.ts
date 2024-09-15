import { Easing, interpolate } from 'remotion';

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> jello skewX value
 */
export const jelloSkewX = (progress: number) =>
	interpolate(
		progress,
		[0, 0.111, 0.222, 0.333, 0.444, 0.555, 0.666, 0.777, 0.888, 1], // Keyframe percentages (0%, 11.1%, 22.2%, 33.3%, 44.4%, 55.5%, 66.6%, 77.7%, 88.8%, 100%)
		[0, 0, -12.5, 6.25, -3.125, 1.5625, -0.78125, 0.390625, -0.1953125, 0], // skewX values in degrees
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> jello skewY value
 */
export const jelloSkewY = (progress: number) =>
	interpolate(
		progress,
		[0, 0.111, 0.222, 0.333, 0.444, 0.555, 0.666, 0.777, 0.888, 1], // Keyframe percentages (0%, 11.1%, 22.2%, 33.3%, 44.4%, 55.5%, 66.6%, 77.7%, 88.8%, 100%)
		[0, 0, -12.5, 6.25, -3.125, 1.5625, -0.78125, 0.390625, -0.1953125, 0], // skewY values in degrees
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

export const lightSpeedInLeftSkewX = (progress: number) =>
	interpolate(progress, [0, 0.6, 0.8, 1], [30, -20, 5, 0], {
		easing: Easing.out(Easing.ease),
	});

export const lightSpeedInRightSkewX = (progress: number) =>
	interpolate(progress, [0, 0.6, 0.8, 1], [-30, 20, -5, 0], {
		easing: Easing.out(Easing.ease),
	});

export const lightSpeedOutLeftSkewX = (progress: number) =>
	interpolate(progress, [0, 1], [0, -30], {
		easing: Easing.in(Easing.ease),
	});

export const lightSpeedOutRightSkewX = (progress: number) =>
	interpolate(progress, [0, 1], [0, 30], {
		easing: Easing.in(Easing.ease),
	});
