import { Easing, interpolate } from 'remotion';

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> headShake rotateY value
 */
export const headShakeRotateY = (progress: number) =>
	interpolate(
		progress,
		[0, 0.065, 0.185, 0.315, 0.435, 0.5], // Keyframe percentages (0%, 6.5%, 18.5%, 31.5%, 43.5%, 50%)
		[0, -9, 7, -5, 3, 0], // rotateY values in degrees
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> swing rotateZ value
 */
export const swingRotateZ = (progress: number) =>
	interpolate(
		progress,
		[0.2, 0.4, 0.6, 0.8, 1], // Keyframe percentages (20%, 40%, 60%, 80%, 100%)
		[15, -10, 5, -5, 0], // rotateZ values in degrees
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> tada rotate value
 */
export const tadaRotate = (progress: number) =>
	interpolate(
		progress,
		[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], // Keyframe percentages (0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%)
		[0, -3, -3, 3, -3, 3, -3, 3, -3, 3, 0], // rotate3d values in degrees
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> wobble rotateZ value
 */
export const wobbleRotateZ = (progress: number) =>
	interpolate(
		progress,
		[0, 0.15, 0.3, 0.45, 0.6, 0.75, 1], // Keyframe percentages (0%, 15%, 30%, 45%, 60%, 75%, 100%)
		[0, -5, 3, -3, 2, -1, 0], // rotate3d values in degrees
		{
			easing: Easing.inOut(Easing.ease),
		},
	);

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> flipRotateY rotateZ value
 */
export const flipRotateY = (progress: number) =>
	interpolate(progress, [0, 0.4, 0.5, 0.8, 1], [-360, -190, -170, 0, 0], {
		easing: Easing.out(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> flipInXRotateX rotateZ value
 */
export const flipInXRotateX = (progress: number) =>
	interpolate(progress, [0, 0.4, 0.6, 0.8, 1], [90, -20, 10, -5, 0], {
		easing: Easing.in(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> flipInYRotateY rotateZ value
 */
export const flipInYRotateY = (progress: number) =>
	interpolate(progress, [0, 0.4, 0.6, 0.8, 1], [90, -20, 10, -5, 0], {
		easing: Easing.in(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> flipOutXRotateX rotateZ value
 */
export const flipOutXRotateX = (progress: number) =>
	interpolate(progress, [0, 0.3, 1], [0, -20, 90], {
		easing: Easing.in(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> flipOutYRotateY rotateZ value
 */
export const flipOutYRotateY = (progress: number) =>
	interpolate(progress, [0, 0.3, 1], [0, -15, 90], {
		easing: Easing.in(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInRotateZ value
 */
export const rotateInRotateZ = (progress: number) =>
	interpolate(progress, [0, 1], [-200, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInDownLeftRotateZ value
 */
export const rotateInDownLeftRotateZ = (progress: number) =>
	interpolate(progress, [0, 1], [-45, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInDownRightRotateZ value
 */
export const rotateInDownRightRotateZ = (progress: number) =>
	interpolate(progress, [0, 1], [45, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInUpLeftRotateZ value
 */
export const rotateInUpLeftRotateZ = (progress: number) =>
	interpolate(progress, [0, 1], [45, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateInUpRightRotateZ value
 */
export const rotateInUpRightRotateZ = (progress: number) =>
	interpolate(progress, [0, 1], [-90, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateOutRotateZ value
 */
export const rotateOutRotateZ = (progress: number) =>
	interpolate(progress, [0, 1], [0, 200], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateOutDownLeftRotateZ value
 */
export const rotateOutDownLeftRotateZ = (progress: number) =>
	interpolate(progress, [0, 1], [0, 45], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateOutDownRightRotateZ value
 */
export const rotateOutDownRightRotateZ = (progress: number) =>
	interpolate(progress, [0, 1], [0, -45], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateOutUpLeftRotateZ value
 */
export const rotateOutUpLeftRotateZ = (progress: number) =>
	interpolate(progress, [0, 1], [0, -45], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rotateOutUpRightRotateZ value
 */
export const rotateOutUpRightRotateZ = (progress: number) =>
	interpolate(progress, [0, 1], [0, 90], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> hingeRotateZ value
 */
export const hingeRotateZ = (progress: number) =>
	interpolate(progress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 80, 60, 80, 60, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> jackInTheBoxRotate value
 */
export const jackInTheBoxRotate = (progress: number) =>
	interpolate(progress, [0, 0.5, 0.7, 1], [30, -10, 3, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rollInRotateZ value
 */
export const rollInRotateZ = (progress: number) =>
	interpolate(progress, [0, 1], [-120, 0], {
		easing: Easing.inOut(Easing.ease),
	});

/**
 *
 * @param progress -> frame / durationInFrames
 * @returns number -> rollOutRotateZ value
 */
export const rollOutRotateZ = (progress: number) =>
	interpolate(progress, [0, 1], [0, 120], {
		easing: Easing.inOut(Easing.ease),
	});
