import { bounceOutOpacity } from '../../interpolations/opacity';
import {
	bounceOutScale,
	bounceOutDownScaleY,
	bounceOutLeftScaleX,
	bounceOutRightScaleX,
	bounceOutUpScaleY,
} from '../../interpolations/scale';
import {
	bounceOutDownTranslateY,
	bounceOutLeftTranslateX,
	bounceOutRightTranslateX,
	bounceOutUpTranslateY,
} from '../../interpolations/translate';

export const bounceOut = (progress: number) => ({
	transform: `scale3d(${bounceOutScale(progress)}, ${bounceOutScale(progress)}, ${bounceOutScale(progress)})`,
	opacity: bounceOutOpacity(progress),
});

export const bounceOutDown = (progress: number) => ({
	transform: `translateY(${bounceOutDownTranslateY(progress)}px) scaleY(${bounceOutDownScaleY(progress)})`,
	opacity: bounceOutOpacity(progress),
});

export const bounceOutLeft = (progress: number) => ({
	transform: `translateX(${bounceOutLeftTranslateX(progress)}px) scaleX(${bounceOutLeftScaleX(progress)})`,
	opacity: bounceOutOpacity(progress),
});

export const bounceOutRight = (progress: number) => ({
	transform: `translateX(${bounceOutRightTranslateX(progress)}px) scaleX(${bounceOutRightScaleX(progress)})`,
	opacity: bounceOutOpacity(progress),
});

export const bounceOutUp = (progress: number) => ({
	transform: `translateY(${bounceOutUpTranslateY(progress)}px) scaleY(${bounceOutUpScaleY(progress)})`,
	opacity: bounceOutOpacity(progress),
});
