import { Easing, interpolate } from 'remotion';

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> bounceTranslateY value
 */
export const bounceTranslateY = (progress: number) =>
	interpolate(
		progress,
		[0, 0.2, 0.4, 0.43, 0.7, 0.8, 0.9, 1], // keyframe times
		[0, 0, -30, -30, -15, 0, -4, 0], // translateY values
		{
			easing: (t) => {
				// Match each keyframe's cubic-bezier function
				if (t <= 0.2) return Easing.bezier(0.215, 0.61, 0.355, 1)(t);
				if (t <= 0.43) return Easing.bezier(0.755, 0.05, 0.855, 0.06)(t);
				if (t <= 0.7) return Easing.bezier(0.755, 0.05, 0.855, 0.06)(t);
				if (t <= 0.8) return Easing.bezier(0.215, 0.61, 0.355, 1)(t);
				return t; // Default linear for the rest
			},
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> headShake translateX value
 */
export const headShakeTranslateX = (progress: number) =>
	interpolate(
		progress,
		[0, 0.065, 0.185, 0.315, 0.435, 0.5], // Keyframe percentages (0%, 6.5%, 18.5%, 31.5%, 43.5%, 50%)
		[0, -6, 5, -3, 2, 0], // translateX values
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> shake translateX value
 */
export const shakeTranslateX = (progress: number) =>
	interpolate(
		progress,
		[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], // Keyframe percentages (0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%)
		[0, -10, 10, -10, 10, -10, 10, -10, 10, -10, 0], // translateX values in px
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> shakeX translateX value
 */
export const shakeXTranslateX = (progress: number) =>
	interpolate(
		progress,
		[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], // Keyframe percentages (0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%)
		[0, -10, 10, -10, 10, -10, 10, -10, 10, -10, 0], // translateX values in px
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> shakeY translateY value
 */
export const shakeYTranslateY = (progress: number) =>
	interpolate(
		progress,
		[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], // Keyframe percentages (0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%)
		[0, -10, 10, -10, 10, -10, 10, -10, 10, 0], // translateY values in px
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> wobble translateX value
 */
export const wobbleTranslateX = (progress: number) =>
	interpolate(
		progress,
		[0, 0.15, 0.3, 0.45, 0.6, 0.75, 1], // Keyframe percentages (0%, 15%, 30%, 45%, 60%, 75%, 100%)
		[0, -25, 20, -15, 10, -5, 0], // translate3d X values as percentages
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> backInDown translateY value
 */
export const backInDownTranslateY = (progress: number) =>
	interpolate(
		progress,
		[0, 0.8, 1], // Keyframe percentages (0%, 80%, 100%)
		[-1200, 0, 0], // translateY values in pixels
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> backInLeft translateX value
 */
export const backInLeftTranslateX = (progress: number) =>
	interpolate(
		progress,
		[0, 0.8, 1], // Keyframe percentages (0%, 80%, 100%)
		[-2000, 0, 0], // translateX values in pixels
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> backInRight translateX value
 */
export const backInRightTranslateX = (progress: number) =>
	interpolate(
		progress,
		[0, 0.8, 1], // Keyframe percentages (0%, 80%, 100%)
		[2000, 0, 0], // translateX values in pixels
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

export const backInUpTranslateY = (progress: number) =>
	interpolate(progress, [0, 0.8, 1], [1200, 0, 0], {
		easing: Easing.inOut(Easing.ease),
	});

export const backOutLeftTranslateX = (progress: number) =>
	interpolate(progress, [0, 0.2, 1], [0, 0, -2000], {
		easing: Easing.inOut(Easing.ease),
	});

export const backOutDownTranslateY = (progress: number) =>
	interpolate(progress, [0, 0.2, 1], [0, 0, 700], {
		easing: Easing.inOut(Easing.ease),
	});

export const backOutRightTranslateX = (progress: number) =>
	interpolate(progress, [0, 0.2, 1], [0, 0, 2000], {
		easing: Easing.inOut(Easing.ease),
	});

export const backOutUpTranslateY = (progress: number) =>
	interpolate(progress, [0, 0.2, 1], [0, 0, -700], {
		easing: Easing.inOut(Easing.ease),
	});

export const bounceInDownTranslateY = (progress: number) =>
	interpolate(progress, [0, 0.6, 0.75, 0.9, 1], [-3000, 25, -10, 5, 0], {
		easing: Easing.bezier(0.215, 0.61, 0.355, 1),
	});

export const bounceInLeftTranslateX = (progress: number) =>
	interpolate(progress, [0, 0.6, 0.75, 0.9, 1], [-3000, 25, -10, 5, 0], {
		easing: Easing.bezier(0.215, 0.61, 0.355, 1),
	});

export const bounceInRightTranslateX = (progress: number) =>
	interpolate(progress, [0, 0.6, 0.75, 0.9, 1], [3000, -25, 10, -5, 0], {
		easing: Easing.bezier(0.215, 0.61, 0.355, 1),
	});

export const bounceInUpTranslateY = (progress: number) =>
	interpolate(progress, [0, 0.6, 0.75, 0.9, 1], [3000, -20, 10, -5, 0], {
		easing: Easing.bezier(0.215, 0.61, 0.355, 1),
	});

export const bounceOutDownTranslateY = (progress: number) =>
	interpolate(progress, [0.2, 0.4, 1], [10, -20, 2000], {
		easing: Easing.inOut(Easing.ease),
	});

export const bounceOutLeftTranslateX = (progress: number) =>
	interpolate(progress, [0.2, 1], [20, -2000], {
		easing: Easing.inOut(Easing.ease),
	});

export const bounceOutRightTranslateX = (progress: number) =>
	interpolate(progress, [0.2, 1], [-20, 2000], {
		easing: Easing.inOut(Easing.ease),
	});

export const bounceOutUpTranslateY = (progress: number) =>
	interpolate(progress, [0.2, 0.4, 1], [-10, 20, -2000], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeInBottomLeftTranslate = (progress: number) =>
	interpolate(progress, [0, 1], [-100, 0], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeInBottomRightTranslate = (progress: number) =>
	interpolate(progress, [0, 1], [100, 0], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeInDownTranslateY = (progress: number) =>
	interpolate(progress, [0, 1], [-100, 0], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeInDownBigTranslateY = (progress: number) =>
	interpolate(progress, [0, 1], [-2000, 0], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeInLeftTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [-100, 0], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeInLeftBigTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [-2000, 0], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeInRightTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [100, 0], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeInRightBigTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [2000, 0], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeInTopLeftTranslate = (progress: number) =>
	interpolate(progress, [0, 1], [-100, 0], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeInTopRightTranslate = (progress: number) =>
	interpolate(progress, [0, 1], [100, 0], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeInUpTranslateY = (progress: number) =>
	interpolate(progress, [0, 1], [100, 0], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeInUpBigTranslateY = (progress: number) =>
	interpolate(progress, [0, 1], [2000, 0], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeOutBottomLeftTranslate = (progress: number) =>
	interpolate(progress, [0, 1], [0, -100], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeOutBottomRightTranslate = (progress: number) =>
	interpolate(progress, [0, 1], [0, 100], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeOutDownTranslateY = (progress: number) =>
	interpolate(progress, [0, 1], [0, 100], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeOutDownBigTranslateY = (progress: number) =>
	interpolate(progress, [0, 1], [0, 2000], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeOutLeftTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [0, -100], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeOutLeftBigTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [0, -2000], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeOutRightTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [0, 100], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeOutRightBigTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [0, 2000], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeOutTopLeftTranslate = (progress: number) =>
	interpolate(progress, [0, 1], [0, -100], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeOutTopRightTranslate = (progress: number) =>
	interpolate(progress, [0, 1], [0, 100], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeOutUpTranslateY = (progress: number) =>
	interpolate(progress, [0, 1], [0, -100], {
		easing: Easing.inOut(Easing.ease),
	});

export const fadeOutUpBigTranslateY = (progress: number) =>
	interpolate(progress, [0, 1], [0, -2000], {
		easing: Easing.inOut(Easing.ease),
	});

export const flipTranslateZ = (progress: number) =>
	interpolate(progress, [0, 0.4, 0.5, 0.8, 1], [0, 150, 150, 0, 0], {
		easing: Easing.out(Easing.ease),
	});

export const lightSpeedInLeftTranslateX = (progress: number) =>
	interpolate(progress, [0, 0.6, 0.8, 1], [-100, 0, 0, 0], {
		easing: Easing.out(Easing.ease),
	});

export const lightSpeedInRightTranslateX = (progress: number) =>
	interpolate(progress, [0, 0.6, 0.8, 1], [100, 0, 0, 0], {
		easing: Easing.out(Easing.ease),
	});

export const lightSpeedOutLeftTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [0, -100], {
		easing: Easing.in(Easing.ease),
	});

export const lightSpeedOutRightTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [0, 100], {
		easing: Easing.in(Easing.ease),
	});

export const rotateInTranslate = (progress: number) =>
	interpolate(progress, [0, 1], [0, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> slideInDownTranslateY value
 */
export const slideInDownTranslateY = (progress: number) =>
	interpolate(progress, [0, 1], [-100, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> slideInLeftTranslateX value
 */
export const slideInLeftTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [-100, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> slideInRightTranslateX value
 */
export const slideInRightTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [100, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> slideInUpTranslateY value
 */
export const slideInUpTranslateY = (progress: number) =>
	interpolate(progress, [0, 1], [100, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> slideOutDownTranslateY value
 */
export const slideOutDownTranslateY = (progress: number) =>
	interpolate(progress, [0, 1], [0, 100], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> slideOutLeftTranslateX value
 */
export const slideOutLeftTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [0, -100], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> slideOutRightTranslateX value
 */
export const slideOutRightTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [0, 100], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> slideOutUpTranslateY value
 */
export const slideOutUpTranslateY = (progress: number) =>
	interpolate(progress, [0, 1], [0, -100], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> hingeTranslateY value
 */
export const hingeTranslateY = (progress: number) =>
	interpolate(progress, [0, 1], [0, 700], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rollInTranslateX value
 */
export const rollInTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [-100, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rollOutTranslateX value
 */
export const rollOutTranslateX = (progress: number) =>
	interpolate(progress, [0, 1], [0, 100], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomInDownTranslateY value
 */
export const zoomInDownTranslateY = (progress: number) =>
	interpolate(progress, [0, 0.6, 1], [-1000, 60, 0], {
		easing: Easing.bezier(0.175, 0.885, 0.32, 1),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomInLeftTranslateX value
 */
export const zoomInLeftTranslateX = (progress: number) =>
	interpolate(progress, [0, 0.6, 1], [-1000, 10, 0], {
		easing: Easing.bezier(0.175, 0.885, 0.32, 1),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomInRightTranslateX value
 */
export const zoomInRightTranslateX = (progress: number) =>
	interpolate(progress, [0, 0.6, 1], [1000, -10, 0], {
		easing: Easing.bezier(0.175, 0.885, 0.32, 1),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomInUpTranslateY value
 */
export const zoomInUpTranslateY = (progress: number) =>
	interpolate(progress, [0, 0.6, 1], [1000, -60, 0], {
		easing: Easing.bezier(0.175, 0.885, 0.32, 1),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomOutDownTranslateY value
 */
export const zoomOutDownTranslateY = (progress: number) =>
	interpolate(progress, [0, 0.4, 1], [0, -60, 2000], {
		easing: Easing.bezier(0.175, 0.885, 0.32, 1),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomOutLeftTranslateX value
 */
export const zoomOutLeftTranslateX = (progress: number) =>
	interpolate(progress, [0, 0.4, 1], [0, 42, -2000], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomOutRightTranslateX value
 */
export const zoomOutRightTranslateX = (progress: number) =>
	interpolate(progress, [0, 0.4, 1], [0, -42, 2000], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomOutUpTranslateY value
 */
export const zoomOutUpTranslateY = (progress: number) =>
	interpolate(progress, [0, 0.4, 1], [0, 60, -2000], {
		easing: Easing.bezier(0.175, 0.885, 0.32, 1),
	});
