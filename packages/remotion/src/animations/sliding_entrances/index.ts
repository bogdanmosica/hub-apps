import {
	slideInDownTranslateY,
	slideInLeftTranslateX,
	slideInRightTranslateX,
	slideInUpTranslateY,
} from '../../interpolations/translate';

export const slideInDown = (progress: number) =>
	`translate3d(0, ${slideInDownTranslateY(progress)}%, 0)`;

export const slideInLeft = (progress: number) =>
	`translate3d(${slideInLeftTranslateX(progress)}%, 0, 0)`;

export const slideInRight = (progress: number) =>
	`translate3d(${slideInRightTranslateX(progress)}%, 0, 0)`;

export const slideInUp = (progress: number) =>
	`translate3d(0, ${slideInUpTranslateY(progress)}%, 0)`;
