import {
	swingRotateZ,
	tadaRotate,
	wobbleRotateZ,
} from '../../interpolations/rotate';
import {
	bounceScaleY,
	heartBeatScale,
	pulseScale,
	rubberBandScaleX,
	rubberBandScaleY,
	tadaScale,
} from '../../interpolations/scale';
import { jelloSkewX, jelloSkewY } from '../../interpolations/skew';
import {
	bounceTranslateY,
	shakeTranslateX,
	shakeXTranslateX,
	shakeYTranslateY,
	wobbleTranslateX,
} from '../../interpolations/translate';

export const bounce = ({
	translateY,
	scaleY,
}: {
	translateY: number;
	scaleY: number;
}) =>
	`translateY(${bounceTranslateY(translateY)}px) scaleY(${bounceScaleY(scaleY)})`;

export { flashOpacity } from '../../interpolations/opacity';

// Applying the interpolated transform value
export const heartBeat = (progress: number) => ({
	transform: `scale(${heartBeatScale(progress)})`,
});

export const jello = (progress: number) => ({
	transform: `skewX(${jelloSkewX(progress)}deg) skewY(${jelloSkewY(progress)}deg)`,
});

export const pulse = (progress: number) => ({
	transform: `scale3d(${pulseScale(progress)}, ${pulseScale(progress)}, ${pulseScale(progress)})`,
});

export const rubberBand = (progress: number) => ({
	transform: `scale3d(${rubberBandScaleX(progress)}, ${rubberBandScaleY(progress)}, 1)`,
});

export const shake = (progress: number) => ({
	transform: `translate3d(${shakeTranslateX(progress)}px, 0, 0)`,
});

export const shakeX = (progress: number) => ({
	transform: `translate3d(${shakeXTranslateX(progress)}px, 0, 0)`,
});

export const shakeY = (progress: number) => ({
	transform: `translate3d(0, ${shakeYTranslateY(progress)}px, 0)`,
});

export const swing = (progress: number) => ({
	transform: `rotate3d(0, 0, 1, ${swingRotateZ(progress)}deg)`,
});

export const tada = (progress: number) => ({
	transform: `scale3d(${tadaScale(progress)}, ${tadaScale(progress)}, ${tadaScale(progress)}) rotate3d(0, 0, 1, ${tadaRotate(progress)}deg)`,
});

export const wobble = (progress: number) => ({
	transform: `translate3d(${wobbleTranslateX(progress)}%, 0, 0) rotate3d(0, 0, 1, ${wobbleRotateZ(progress)}deg)`,
});
