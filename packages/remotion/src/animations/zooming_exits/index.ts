import { zoomOutOpacity } from '../../interpolations/opacity';
import {
	zoomOutScale,
	zoomOutDownScale,
	zoomOutLeftScale,
	zoomOutRightScale,
	zoomOutUpScale,
} from '../../interpolations/scale';
import {
	zoomOutDownTranslateY,
	zoomOutLeftTranslateX,
	zoomOutRightTranslateX,
	zoomOutUpTranslateY,
} from '../../interpolations/translate';

export const zoomOut = (progress: number) => ({
	transform: `scale3d(${zoomOutScale(progress)}, ${zoomOutScale(progress)}, ${zoomOutScale(progress)})`,
	opacity: zoomOutOpacity(progress),
});

export const zoomOutDown = (progress: number) => ({
	transform: `translate3d(0, ${zoomOutDownTranslateY(progress)}px, 0) scale3d(${zoomOutDownScale(progress)}, ${zoomOutDownScale(progress)}, ${zoomOutDownScale(progress)})`,
	opacity: zoomOutOpacity(progress),
});

export const zoomOutLeft = (progress: number) => ({
	transform: `translate3d(${zoomOutLeftTranslateX(progress)}px, 0, 0) scale3d(${zoomOutLeftScale(progress)}, ${zoomOutLeftScale(progress)}, ${zoomOutLeftScale(progress)})`,
	opacity: zoomOutOpacity(progress),
});

export const zoomOutRight = (progress: number) => ({
	transform: `translate3d(${zoomOutRightTranslateX(progress)}px, 0, 0) scale3d(${zoomOutRightScale(progress)}, ${zoomOutRightScale(progress)}, ${zoomOutRightScale(progress)})`,
	opacity: zoomOutOpacity(progress),
});

export const zoomOutUp = (progress: number) => ({
	transform: `translate3d(0, ${zoomOutUpTranslateY(progress)}px, 0) scale3d(${zoomOutUpScale(progress)}, ${zoomOutUpScale(progress)}, ${zoomOutUpScale(progress)})`,
	opacity: zoomOutOpacity(progress),
});
