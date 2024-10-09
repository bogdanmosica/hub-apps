import {
	fadeInBigOpacity,
	fadeInOpacity,
	fadeInRightBigOpacity,
} from '../../interpolations/opacity';
import {
	fadeInBottomLeftTranslate,
	fadeInBottomRightTranslate,
	fadeInDownBigTranslateY,
	fadeInDownTranslateY,
	fadeInLeftBigTranslateX,
	fadeInLeftTranslateX,
	fadeInRightBigTranslateX,
	fadeInRightTranslateX,
	fadeInTopLeftTranslate,
	fadeInTopRightTranslate,
	fadeInUpBigTranslateY,
	fadeInUpTranslateY,
} from '../../interpolations/translate';

export const fadeIn = (progress: number) => ({
	opacity: fadeInOpacity(progress),
});

export const fadeInBottomLeft = (progress: number) => ({
	transform: `translate3d(${fadeInBottomLeftTranslate(progress)}%, ${fadeInBottomLeftTranslate(progress)}%, 0)`,
	opacity: fadeInOpacity(progress),
});

export const fadeInBottomRight = (progress: number) => ({
	transform: `translate3d(${fadeInBottomRightTranslate(progress)}%, ${fadeInBottomRightTranslate(progress)}%, 0)`,
	opacity: fadeInOpacity(progress),
});

export const fadeInDown = (progress: number) => ({
	transform: `translateY(${fadeInDownTranslateY(progress)}%)`,
	opacity: fadeInOpacity(progress),
});

export const fadeInDownBig = (progress: number) => ({
	transform: `translateY(${fadeInDownBigTranslateY(progress)}px)`,
	opacity: fadeInBigOpacity(progress),
});

export const fadeInLeft = (progress: number) => ({
	transform: `translateX(${fadeInLeftTranslateX(progress)}%)`,
	opacity: fadeInBigOpacity(progress),
});

export const fadeInLeftBig = (progress: number) => ({
	transform: `translateX(${fadeInLeftBigTranslateX(progress)}px)`,
	opacity: fadeInBigOpacity(progress),
});

export const fadeInRight = (progress: number) => ({
	transform: `translateX(${fadeInRightTranslateX(progress)}%)`,
	opacity: fadeInBigOpacity(progress),
});

export const fadeInRightBig = (progress: number) => ({
	transform: `translateX(${fadeInRightBigTranslateX(progress)}px)`,
	opacity: fadeInRightBigOpacity(progress),
});

export const fadeInTopLeft = (progress: number) => ({
	transform: `translate3d(${fadeInTopLeftTranslate(progress)}%, ${fadeInTopLeftTranslate(progress)}%, 0)`,
	opacity: fadeInRightBigOpacity(progress),
});

export const fadeInTopRight = (progress: number) => ({
	transform: `translate3d(${fadeInTopRightTranslate(progress)}%, ${fadeInTopRightTranslate(progress)}%, 0)`,
	opacity: fadeInRightBigOpacity(progress),
});

export const fadeInUp = (progress: number) => ({
	transform: `translateY(${fadeInUpTranslateY(progress)}%)`,
	opacity: fadeInRightBigOpacity(progress),
});

export const fadeInUpBig = (progress: number) => ({
	transform: `translateY(${fadeInUpBigTranslateY(progress)}px)`,
	opacity: fadeInRightBigOpacity(progress),
});
