import {
	slideOutDownTranslateY,
	slideOutLeftTranslateX,
	slideOutRightTranslateX,
	slideOutUpTranslateY,
} from '../../interpolations/translate';

export const slideOutDown = (progress: number) =>
	`translate3d(0, ${slideOutDownTranslateY(progress)}%, 0)`;

export const slideOutLeft = (progress: number) =>
	`translate3d(${slideOutLeftTranslateX(progress)}%, 0, 0)`;

export const slideOutRight = (progress: number) =>
	`translate3d(${slideOutRightTranslateX(progress)}%, 0, 0)`;

export const slideOutUp = (progress: number) =>
	`translate3d(0, ${slideOutUpTranslateY(progress)}%, 0)`;
