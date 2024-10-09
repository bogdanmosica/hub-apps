import { zoomInOpacity } from '../../interpolations/opacity';
import {
	zoomInScale,
	zoomInDownScale,
	zoomInLeftScale,
	zoomInRightScale,
	zoomInUpScale,
} from '../../interpolations/scale';
import {
	zoomInDownTranslateY,
	zoomInLeftTranslateX,
	zoomInRightTranslateX,
	zoomInUpTranslateY,
} from '../../interpolations/translate';

export const zoomIn = (progress: number) => ({
	transform: `scale3d(${zoomInScale(progress)}, ${zoomInScale(progress)}, ${zoomInScale(progress)})`,
	opacity: zoomInOpacity(progress),
});

export const zoomInDown = (progress: number) => ({
	transform: `translate3d(0, ${zoomInDownTranslateY(progress)}px, 0) scale3d(${zoomInDownScale(progress)}, ${zoomInDownScale(progress)}, ${zoomInDownScale(progress)})`,
	opacity: zoomInOpacity(progress),
});

export const zoomInLeft = (progress: number) => ({
	transform: `translate3d(${zoomInLeftTranslateX(progress)}px, 0, 0) scale3d(${zoomInLeftScale(progress)}, ${zoomInLeftScale(progress)}, ${zoomInLeftScale(progress)})`,
	opacity: zoomInOpacity(progress),
});

export const zoomInRight = (progress: number) => ({
	transform: `translate3d(${zoomInRightTranslateX(progress)}px, 0, 0) scale3d(${zoomInRightScale(progress)}, ${zoomInRightScale(progress)}, ${zoomInRightScale(progress)})`,
	opacity: zoomInOpacity(progress),
});

export const zoomInUp = (progress: number) => ({
	transform: `translate3d(0, ${zoomInUpTranslateY(progress)}px, 0) scale3d(${zoomInUpScale(progress)}, ${zoomInUpScale(progress)}, ${zoomInUpScale(progress)})`,
	opacity: zoomInOpacity(progress),
});
