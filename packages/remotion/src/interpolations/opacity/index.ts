import { Easing, interpolate } from 'remotion';

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> flashOpacity value
 */
export const flashOpacity = (progress: number) =>
	interpolate(
		progress,
		[0, 0.25, 0.5, 0.75, 1], // Corresponding to from (0%), 25%, 50%, 75%, to (100%)
		[1, 0, 1, 0, 1], // Opacity values matching keyframes
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> backInDown opacity value
 */
export const backInDownOpacity = (progress: number) =>
	interpolate(
		progress,
		[0, 0.8, 1], // Keyframe percentages (0%, 80%, 100%)
		[0.7, 0.7, 1], // opacity values
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> backInLeft opacity value
 */
export const backInLeftOpacity = (progress: number) =>
	interpolate(
		progress,
		[0, 0.8, 1], // Keyframe percentages (0%, 80%, 100%)
		[0.7, 0.7, 1], // opacity values
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> backInRight opacity value
 */
export const backInRightOpacity = (progress: number) =>
	interpolate(
		progress,
		[0, 0.8, 1], // Keyframe percentages (0%, 80%, 100%)
		[0.7, 0.7, 1], // opacity values
		{
			easing: Easing.inOut(Easing.ease),
		},
	);
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const backInUpOpacity = (progress: number) =>
	interpolate(progress, [0, 0.8, 1], [0.7, 0.7, 1], {
		easing: Easing.inOut(Easing.ease),
	});
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const backOutLeftOpacity = (progress: number) =>
	interpolate(progress, [0, 0.2, 1], [1, 0.7, 0.7], {
		easing: Easing.inOut(Easing.ease),
	});
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const backOutDownOpacity = (progress: number) =>
	interpolate(progress, [0, 0.2, 1], [1, 0.7, 0.7], {
		easing: Easing.inOut(Easing.ease),
	});
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const backOutRightOpacity = (progress: number) =>
	interpolate(progress, [0, 0.2, 1], [1, 0.7, 0.7], {
		easing: Easing.inOut(Easing.ease),
	});
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const backOutUpOpacity = (progress: number) =>
	interpolate(progress, [0, 0.2, 1], [1, 0.7, 0.7], {
		easing: Easing.inOut(Easing.ease),
	});
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const bounceInOpacity = (progress: number) =>
	interpolate(progress, [0, 0.6, 1], [0, 1, 1], {
		easing: Easing.bezier(0.215, 0.61, 0.355, 1),
	});
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const bounceOutOpacity = (progress: number) =>
	interpolate(progress, [0.2, 0.5, 1], [1, 1, 0], {
		easing: Easing.inOut(Easing.ease),
	});
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const fadeInOpacity = (progress: number) =>
	interpolate(progress, [0, 1], [0, 1], {
		easing: Easing.inOut(Easing.ease),
	});
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const fadeInBigOpacity = (progress: number) =>
	interpolate(progress, [0, 1], [0, 1], {
		easing: Easing.inOut(Easing.ease),
	});
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const fadeInRightBigOpacity = (progress: number) =>
	interpolate(progress, [0, 1], [0, 1], {
		easing: Easing.inOut(Easing.ease),
	});
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const fadeOutOpacity = (progress: number) =>
	interpolate(progress, [0, 1], [1, 0], {
		easing: Easing.inOut(Easing.ease),
	});
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const fadeOutBigOpacity = (progress: number) =>
	interpolate(progress, [0, 1], [1, 0], {
		easing: Easing.inOut(Easing.ease),
	});
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const flipInOpacity = (progress: number) =>
	interpolate(progress, [0, 0.6, 1], [0, 1, 1], {
		easing: Easing.in(Easing.ease),
	});
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const flipOutOpacity = (progress: number) =>
	interpolate(progress, [0, 0.3, 1], [1, 1, 0], {
		easing: Easing.in(Easing.ease),
	});
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const lightSpeedInOpacity = (progress: number) =>
	interpolate(progress, [0, 0.6, 1], [0, 1, 1], {
		easing: Easing.out(Easing.ease),
	});
/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const lightSpeedOutOpacity = (progress: number) =>
	interpolate(progress, [0, 1], [1, 0], {
		easing: Easing.in(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInOpacity value
 */
export const rotateInOpacity = (progress: number) =>
	interpolate(progress, [0, 1], [0, 1], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateOutOpacity value
 */
export const rotateOutOpacity = (progress: number) =>
	interpolate(progress, [0, 1], [1, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> hingeOpacity value
 */
export const hingeOpacity = (progress: number) =>
	interpolate(progress, [0.8, 1], [1, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> jackInTheBoxOpacity value
 */
export const jackInTheBoxOpacity = (progress: number) =>
	interpolate(progress, [0, 1], [0, 1], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rollInOpacity value
 */
export const rollInOpacity = (progress: number) =>
	interpolate(progress, [0, 1], [0, 1], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rollOutOpacity value
 */
export const rollOutOpacity = (progress: number) =>
	interpolate(progress, [0, 1], [1, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomInOpacity value
 */
export const zoomInOpacity = (progress: number) =>
	interpolate(progress, [0, 0.5, 1], [0, 1, 1], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> zoomOutOpacity value
 */
export const zoomOutOpacity = (progress: number) =>
	interpolate(progress, [0, 0.5, 1], [1, 0, 0], {
		easing: Easing.inOut(Easing.ease),
	});
