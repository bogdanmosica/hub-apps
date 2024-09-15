import {
	hingeOpacity,
	jackInTheBoxOpacity,
	rollInOpacity,
	rollOutOpacity,
} from '../../interpolations/opacity';
import {
	hingeRotateZ,
	jackInTheBoxRotate,
	rollInRotateZ,
	rollOutRotateZ,
} from '../../interpolations/rotate';
import { jackInTheBoxScale } from '../../interpolations/scale';
import {
	hingeTranslateY,
	rollInTranslateX,
	rollOutTranslateX,
} from '../../interpolations/translate';

export const hinge = (progress: number) =>
	`rotate3d(0, 0, 1, ${hingeRotateZ(progress)}deg) translate3d(0, ${hingeTranslateY(progress)}px, 0) opacity(${hingeOpacity(progress)})`;

export const jackInTheBox = (progress: number) =>
	`scale(${jackInTheBoxScale(progress)}) rotate(${jackInTheBoxRotate(progress)}deg) opacity(${jackInTheBoxOpacity(progress)})`;

export const rollIn = (progress: number) =>
	`translate3d(${rollInTranslateX(progress)}%, 0, 0) rotate3d(0, 0, 1, ${rollInRotateZ(progress)}deg) opacity(${rollInOpacity(progress)})`;

export const rollOut = (progress: number) =>
	`translate3d(${rollOutTranslateX(progress)}%, 0, 0) rotate3d(0, 0, 1, ${rollOutRotateZ(progress)}deg) opacity(${rollOutOpacity(progress)})`;
