import { rotateOutOpacity } from '../../interpolations/opacity';
import {
	rotateOutRotateZ,
	rotateOutDownLeftRotateZ,
	rotateOutDownRightRotateZ,
	rotateOutUpLeftRotateZ,
	rotateOutUpRightRotateZ,
} from '../../interpolations/rotate';

export const rotateOut = (progress: number) => ({
	transform: `rotate3d(0, 0, 1, ${rotateOutRotateZ(progress)}deg)`,
	opacity: rotateOutOpacity(progress),
});

export const rotateOutDownLeft = (progress: number) => ({
	transform: `rotate3d(0, 0, 1, ${rotateOutDownLeftRotateZ(progress)}deg)`,
	opacity: rotateOutOpacity(progress),
});

export const rotateOutDownRight = (progress: number) => ({
	transform: `rotate3d(0, 0, 1, ${rotateOutDownRightRotateZ(progress)}deg)`,
	opacity: rotateOutOpacity(progress),
});

export const rotateOutUpLeft = (progress: number) => ({
	transform: `rotate3d(0, 0, 1, ${rotateOutUpLeftRotateZ(progress)}deg)`,
	opacity: rotateOutOpacity(progress),
});

export const rotateOutUpRight = (progress: number) => ({
	transform: `rotate3d(0, 0, 1, ${rotateOutUpRightRotateZ(progress)}deg)`,
	opacity: rotateOutOpacity(progress),
});
