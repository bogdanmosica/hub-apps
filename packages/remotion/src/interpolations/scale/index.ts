import { Easing, interpolate } from 'remotion';

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> bounceScaleY value
 */
export const bounceScaleY = (progress: number) =>
	interpolate(
		progress,
		[0, 0.4, 0.43, 0.7, 0.8, 0.9, 1], // keyframe times
		[1, 1.1, 1.1, 1.05, 0.95, 1.02, 1], // scaleY values
		{
			easing: (t) => {
				if (t <= 0.4) return Easing.bezier(0.755, 0.05, 0.855, 0.06)(t);
				if (t <= 0.7) return Easing.bezier(0.755, 0.05, 0.855, 0.06)(t);
				if (t <= 0.8) return Easing.bezier(0.215, 0.61, 0.355, 1)(t);
				return t;
			},
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> heartBeat scale value
 */
export const heartBeatScale = (progress: number) =>
	interpolate(
		progress,
		[0, 0.14, 0.28, 0.42, 0.7, 1], // Keyframe percentages (0%, 14%, 28%, 42%, 70%, 100%)
		[1, 1.3, 1, 1.3, 1, 1], // scale values
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> pulse scale value
 */
export const pulseScale = (progress: number) =>
	interpolate(
		progress,
		[0, 0.5, 1], // Keyframe percentages (0%, 50%, 100%)
		[1, 1.05, 1], // scale3d values
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rubberBand scaleY value
 */
export const rubberBandScaleY = (progress: number) =>
	interpolate(
		progress,
		[0, 0.3, 0.4, 0.5, 0.65, 0.75, 1], // Keyframe percentages (0%, 30%, 40%, 50%, 65%, 75%, 100%)
		[1, 0.75, 1.25, 0.85, 1.05, 0.95, 1], // scaleY values
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rubberBand scaleX value
 */
export const rubberBandScaleX = (progress: number) =>
	interpolate(
		progress,
		[0, 0.3, 0.4, 0.5, 0.65, 0.75, 1], // Keyframe percentages (0%, 30%, 40%, 50%, 65%, 75%, 100%)
		[1, 1.25, 0.75, 1.15, 0.95, 1.05, 1], // scaleX values
		{
			easing: Easing.inOut(Easing.ease),
		},
	);
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> tada scale value
 */
export const tadaScale = (progress: number) =>
	interpolate(
		progress,
		[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], // Keyframe percentages (0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%)
		[1, 0.9, 0.9, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1], // scale3d values
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> backInDown scale value
 */
export const backInDownScale = (progress: number) =>
	interpolate(
		progress,
		[0, 0.8, 1], // Keyframe percentages (0%, 80%, 100%)
		[0.7, 0.7, 1], // scale values
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> backInLeft scale value
 */
export const backInLeftScale = (progress: number) =>
	interpolate(
		progress,
		[0, 0.8, 1], // Keyframe percentages (0%, 80%, 100%)
		[0.7, 0.7, 1], // scale values
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> backInRight scale value
 */
export const backInRightScale = (progress: number) =>
	interpolate(
		progress,
		[0, 0.8, 1], // Keyframe percentages (0%, 80%, 100%)
		[0.7, 0.7, 1], // scale values
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

export const backInUpScale = (progress: number) =>
	interpolate(progress, [0, 0.8, 1], [0.7, 0.7, 1], {
		easing: Easing.inOut(Easing.ease),
	});

export const backOutLeftScale = (progress: number) =>
	interpolate(progress, [0, 0.2, 1], [1, 0.7, 0.7], {
		easing: Easing.inOut(Easing.ease),
	});

export const backOutDownScale = (progress: number) =>
	interpolate(progress, [0, 0.2, 1], [1, 0.7, 0.7], {
		easing: Easing.inOut(Easing.ease),
	});

export const backOutRightScale = (progress: number) =>
	interpolate(progress, [0, 0.2, 1], [1, 0.7, 0.7], {
		easing: Easing.inOut(Easing.ease),
	});

export const backOutUpScale = (progress: number) =>
	interpolate(progress, [0, 0.2, 1], [1, 0.7, 0.7], {
		easing: Easing.inOut(Easing.ease),
	});

export const bounceInScale = (progress: number) =>
	interpolate(
		progress,
		[0, 0.2, 0.4, 0.6, 0.8, 1],
		[0.3, 1.1, 0.9, 1.03, 0.97, 1],
		{
			easing: Easing.bezier(0.215, 0.61, 0.355, 1),
		},
	);

export const bounceInDownScaleY = (progress: number) =>
	interpolate(progress, [0, 0.6, 0.75, 0.9, 1], [3, 0.9, 0.95, 0.985, 1], {
		easing: Easing.bezier(0.215, 0.61, 0.355, 1),
	});

export const bounceInLeftScaleX = (progress: number) =>
	interpolate(progress, [0, 0.6, 0.75, 0.9, 1], [3, 1, 0.98, 0.995, 1], {
		easing: Easing.bezier(0.215, 0.61, 0.355, 1),
	});

export const bounceInRightScaleX = (progress: number) =>
	interpolate(progress, [0, 0.6, 0.75, 0.9, 1], [3, 1, 0.98, 0.995, 1], {
		easing: Easing.bezier(0.215, 0.61, 0.355, 1),
	});

export const bounceInUpScaleY = (progress: number) =>
	interpolate(progress, [0, 0.6, 0.75, 0.9, 1], [5, 0.9, 0.95, 0.985, 1], {
		easing: Easing.bezier(0.215, 0.61, 0.355, 1),
	});

export const bounceOutScale = (progress: number) =>
	interpolate(progress, [0.2, 0.5, 1], [0.9, 1.1, 0.3], {
		easing: Easing.inOut(Easing.ease),
	});

export const bounceOutDownScaleY = (progress: number) =>
	interpolate(progress, [0.2, 0.4, 1], [0.985, 0.9, 3], {
		easing: Easing.inOut(Easing.ease),
	});

export const bounceOutLeftScaleX = (progress: number) =>
	interpolate(progress, [0.2, 1], [0.9, 2], {
		easing: Easing.inOut(Easing.ease),
	});

export const bounceOutRightScaleX = (progress: number) =>
	interpolate(progress, [0.2, 1], [0.9, 2], {
		easing: Easing.inOut(Easing.ease),
	});

export const bounceOutUpScaleY = (progress: number) =>
	interpolate(progress, [0.2, 0.4, 1], [0.985, 0.9, 3], {
		easing: Easing.inOut(Easing.ease),
	});

export const flipScale = (progress: number) =>
	interpolate(progress, [0, 0.8, 1], [1, 0.95, 1], {
		easing: Easing.in(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> jackInTheBoxScale value
 */
export const jackInTheBoxScale = (progress: number) =>
	interpolate(progress, [0, 1], [0.1, 1], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomInScale value
 */
export const zoomInScale = (progress: number) =>
	interpolate(progress, [0, 1], [0.3, 1], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomInDownScale value
 */
export const zoomInDownScale = (progress: number) =>
	interpolate(progress, [0, 0.6, 1], [0.1, 0.475, 1], {
		easing: Easing.bezier(0.175, 0.885, 0.32, 1),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomInLeftScale value
 */
export const zoomInLeftScale = (progress: number) =>
	interpolate(progress, [0, 0.6, 1], [0.1, 0.475, 1], {
		easing: Easing.bezier(0.175, 0.885, 0.32, 1),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomInRightScale value
 */
export const zoomInRightScale = (progress: number) =>
	interpolate(progress, [0, 0.6, 1], [0.1, 0.475, 1], {
		easing: Easing.bezier(0.175, 0.885, 0.32, 1),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomInUpScale value
 */
export const zoomInUpScale = (progress: number) =>
	interpolate(progress, [0, 0.6, 1], [0.1, 0.475, 1], {
		easing: Easing.bezier(0.175, 0.885, 0.32, 1),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomOutScale value
 */
export const zoomOutScale = (progress: number) =>
	interpolate(progress, [0, 0.5, 1], [1, 0.3, 0.3], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomOutDownScale value
 */
export const zoomOutDownScale = (progress: number) =>
	interpolate(progress, [0, 0.4, 1], [1, 0.475, 0.1], {
		easing: Easing.bezier(0.175, 0.885, 0.32, 1),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomOutLeftScale value
 */
export const zoomOutLeftScale = (progress: number) =>
	interpolate(progress, [0, 0.4, 1], [1, 0.475, 0.1], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomOutRightScale value
 */
export const zoomOutRightScale = (progress: number) =>
	interpolate(progress, [0, 0.4, 1], [1, 0.475, 0.1], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomOutUpScale value
 */
export const zoomOutUpScale = (progress: number) =>
	interpolate(progress, [0, 0.4, 1], [1, 0.475, 0.1], {
		easing: Easing.bezier(0.175, 0.885, 0.32, 1),
	});
