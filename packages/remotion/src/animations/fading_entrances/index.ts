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

export const fadeIn = (progress: number) =>
	`opacity(${fadeInOpacity(progress)})`;

export const fadeInBottomLeft = (progress: number) =>
	`translate3d(${fadeInBottomLeftTranslate(progress)}%, ${fadeInBottomLeftTranslate(progress)}%, 0) opacity(${fadeInOpacity(progress)})`;

export const fadeInBottomRight = (progress: number) =>
	`translate3d(${fadeInBottomRightTranslate(progress)}%, ${fadeInBottomRightTranslate(progress)}%, 0) opacity(${fadeInOpacity(progress)})`;

export const fadeInDown = (progress: number) =>
	`translateY(${fadeInDownTranslateY(progress)}%) opacity(${fadeInOpacity(progress)})`;

export const fadeInDownBig = (progress: number) =>
	`translateY(${fadeInDownBigTranslateY(progress)}px) opacity(${fadeInBigOpacity(progress)})`;

export const fadeInLeft = (progress: number) =>
	`translateX(${fadeInLeftTranslateX(progress)}%) opacity(${fadeInBigOpacity(progress)})`;

export const fadeInLeftBig = (progress: number) =>
	`translateX(${fadeInLeftBigTranslateX(progress)}px) opacity(${fadeInBigOpacity(progress)})`;

export const fadeInRight = (progress: number) =>
	`translateX(${fadeInRightTranslateX(progress)}%) opacity(${fadeInBigOpacity(progress)})`;

export const fadeInRightBig = (progress: number) =>
	`translateX(${fadeInRightBigTranslateX(progress)}px) opacity(${fadeInRightBigOpacity(progress)})`;

export const fadeInTopLeft = (progress: number) =>
	`translate3d(${fadeInTopLeftTranslate(progress)}%, ${fadeInTopLeftTranslate(progress)}%, 0) opacity(${fadeInRightBigOpacity(progress)})`;

export const fadeInTopRight = (progress: number) =>
	`translate3d(${fadeInTopRightTranslate(progress)}%, ${fadeInTopRightTranslate(progress)}%, 0) opacity(${fadeInRightBigOpacity(progress)})`;

export const fadeInUp = (progress: number) =>
	`translateY(${fadeInUpTranslateY(progress)}%) opacity(${fadeInRightBigOpacity(progress)})`;

export const fadeInUpBig = (progress: number) =>
	`translateY(${fadeInUpBigTranslateY(progress)}px) opacity(${fadeInRightBigOpacity(progress)})`;
