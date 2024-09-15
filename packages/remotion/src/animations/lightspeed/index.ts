import {
	lightSpeedInOpacity,
	lightSpeedOutOpacity,
} from '../../interpolations/opacity';
import {
	lightSpeedInLeftSkewX,
	lightSpeedInRightSkewX,
	lightSpeedOutLeftSkewX,
	lightSpeedOutRightSkewX,
} from '../../interpolations/skew';
import {
	lightSpeedInLeftTranslateX,
	lightSpeedInRightTranslateX,
	lightSpeedOutLeftTranslateX,
	lightSpeedOutRightTranslateX,
} from '../../interpolations/translate';

export const lightSpeedInLeft = (progress: number) =>
	`translate3d(${lightSpeedInLeftTranslateX(progress)}%, 0, 0) skewX(${lightSpeedInLeftSkewX(progress)}deg) opacity(${lightSpeedInOpacity(progress)})`;

export const lightSpeedInRight = (progress: number) =>
	`translate3d(${lightSpeedInRightTranslateX(progress)}%, 0, 0) skewX(${lightSpeedInRightSkewX(progress)}deg) opacity(${lightSpeedInOpacity(progress)})`;

export const lightSpeedOutLeft = (progress: number) =>
	`translate3d(${lightSpeedOutLeftTranslateX(progress)}%, 0, 0) skewX(${lightSpeedOutLeftSkewX(progress)}deg) opacity(${lightSpeedOutOpacity(progress)})`;

export const lightSpeedOutRight = (progress: number) =>
	`translate3d(${lightSpeedOutRightTranslateX(progress)}%, 0, 0) skewX(${lightSpeedOutRightSkewX(progress)}deg) opacity(${lightSpeedOutOpacity(progress)})`;
