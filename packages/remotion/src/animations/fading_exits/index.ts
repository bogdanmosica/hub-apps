import {
	fadeOutOpacity,
	fadeOutBigOpacity,
} from '../../interpolations/opacity';
import {
	fadeOutBottomLeftTranslate,
	fadeOutBottomRightTranslate,
	fadeOutDownTranslateY,
	fadeOutDownBigTranslateY,
	fadeOutLeftTranslateX,
	fadeOutLeftBigTranslateX,
	fadeOutRightTranslateX,
	fadeOutRightBigTranslateX,
	fadeOutTopLeftTranslate,
	fadeOutTopRightTranslate,
	fadeOutUpTranslateY,
	fadeOutUpBigTranslateY,
} from '../../interpolations/translate';

export const fadeOut = (progress: number) =>
	`opacity(${fadeOutOpacity(progress)})`;

export const fadeOutBottomLeft = (progress: number) =>
	`translate3d(${fadeOutBottomLeftTranslate(progress)}%, ${fadeOutBottomLeftTranslate(progress)}%, 0) opacity(${fadeOutOpacity(progress)})`;

export const fadeOutBottomRight = (progress: number) =>
	`translate3d(${fadeOutBottomRightTranslate(progress)}%, ${fadeOutBottomRightTranslate(progress)}%, 0) opacity(${fadeOutOpacity(progress)})`;

export const fadeOutDown = (progress: number) =>
	`translateY(${fadeOutDownTranslateY(progress)}%) opacity(${fadeOutOpacity(progress)})`;

export const fadeOutDownBig = (progress: number) =>
	`translateY(${fadeOutDownBigTranslateY(progress)}px) opacity(${fadeOutBigOpacity(progress)})`;

export const fadeOutLeft = (progress: number) =>
	`translateX(${fadeOutLeftTranslateX(progress)}%) opacity(${fadeOutBigOpacity(progress)})`;

export const fadeOutLeftBig = (progress: number) =>
	`translateX(${fadeOutLeftBigTranslateX(progress)}px) opacity(${fadeOutBigOpacity(progress)})`;

export const fadeOutRight = (progress: number) =>
	`translateX(${fadeOutRightTranslateX(progress)}%) opacity(${fadeOutBigOpacity(progress)})`;

export const fadeOutRightBig = (progress: number) =>
	`translateX(${fadeOutRightBigTranslateX(progress)}px) opacity(${fadeOutBigOpacity(progress)})`;

export const fadeOutTopLeft = (progress: number) =>
	`translate3d(${fadeOutTopLeftTranslate(progress)}%, ${fadeOutTopLeftTranslate(progress)}%, 0) opacity(${fadeOutBigOpacity(progress)})`;

export const fadeOutTopRight = (progress: number) =>
	`translate3d(${fadeOutTopRightTranslate(progress)}%, ${fadeOutTopRightTranslate(progress)}%, 0) opacity(${fadeOutBigOpacity(progress)})`;

export const fadeOutUp = (progress: number) =>
	`translateY(${fadeOutUpTranslateY(progress)}%) opacity(${fadeOutBigOpacity(progress)})`;

export const fadeOutUpBig = (progress: number) =>
	`translateY(${fadeOutUpBigTranslateY(progress)}px) opacity(${fadeOutBigOpacity(progress)})`;