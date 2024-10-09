import {
	backInDownOpacity,
	backInLeftOpacity,
	backInRightOpacity,
	backInUpOpacity,
} from '../../interpolations/opacity';
import {
	backInDownScale,
	backInLeftScale,
	backInRightScale,
	backInUpScale,
} from '../../interpolations/scale';
import {
	backInDownTranslateY,
	backInLeftTranslateX,
	backInRightTranslateX,
	backInUpTranslateY,
} from '../../interpolations/translate';

export const backInDown = (progress: number) => ({
	transform: `translateY(${backInDownTranslateY(progress)}px) scale(${backInDownScale(progress)})`,
	opacity: backInDownOpacity(progress),
});

export const backInRight = (progress: number) => ({
	transform: `translateX(${backInRightTranslateX(progress)}px) scale(${backInRightScale(progress)})`,
	opacity: backInRightOpacity(progress),
});

export const backInLeft = (progress: number) => ({
	transform: `translateX(${backInLeftTranslateX(progress)}px) scale(${backInLeftScale(progress)})`,
	opacity: backInLeftOpacity(progress),
});

export const backInUp = (progress: number) => ({
	transform: `translateY(${backInUpTranslateY(progress)}px) scale(${backInUpScale(progress)})`,
	opacity: backInUpOpacity(progress),
});
