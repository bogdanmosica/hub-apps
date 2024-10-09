import {
	backOutLeftOpacity,
	backOutDownOpacity,
	backOutRightOpacity,
	backOutUpOpacity,
} from '../../interpolations/opacity';
import {
	backOutDownScale,
	backOutLeftScale,
	backOutRightScale,
	backOutUpScale,
} from '../../interpolations/scale';
import {
	backOutDownTranslateY,
	backOutLeftTranslateX,
	backOutRightTranslateX,
	backOutUpTranslateY,
} from '../../interpolations/translate';

export const backOutLeft = (progress: number) => ({
	transform: `translateX(${backOutLeftTranslateX(progress)}px) scale(${backOutLeftScale(progress)})`,
	opacity: backOutLeftOpacity(progress),
});

export const backOutDown = (progress: number) => ({
	transform: `translateY(${backOutDownTranslateY(progress)}px) scale(${backOutDownScale(progress)})`,
	opacity: backOutDownOpacity(progress),
});

export const backOutRight = (progress: number) => ({
	transform: `translateX(${backOutRightTranslateX(progress)}px) scale(${backOutRightScale(progress)})`,
	opacity: backOutRightOpacity(progress),
});

export const backOutUp = (progress: number) => ({
	transform: `translateY(${backOutUpTranslateY(progress)}px) scale(${backOutUpScale(progress)})`,
	opacity: backOutUpOpacity(progress),
});
