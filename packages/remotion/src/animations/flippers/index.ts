import { flipInOpacity, flipOutOpacity } from '../../interpolations/opacity';
import {
	flipRotateY,
	flipInXRotateX,
	flipInYRotateY,
	flipOutXRotateX,
	flipOutYRotateY,
} from '../../interpolations/rotate';
import { flipScale } from '../../interpolations/scale';
import { flipTranslateZ } from '../../interpolations/translate';

export const flip = (progress: number) => ({
	transform: `translate3d(0, 0, ${flipTranslateZ(progress)}px) rotate3d(0, 1, 0, ${flipRotateY(progress)}deg) scale3d(${flipScale(progress)}, ${flipScale(progress)}, ${flipScale(progress)})`,
});

export const flipInX = (progress: number) => ({
	transform: `rotate3d(1, 0, 0, ${flipInXRotateX(progress)}deg)`,
	opacity: flipInOpacity(progress),
});

export const flipInY = (progress: number) => ({
	transform: `rotate3d(0, 1, 0, ${flipInYRotateY(progress)}deg)`,
	opacity: flipInOpacity(progress),
});

export const flipOutX = (progress: number) => ({
	transform: `rotate3d(1, 0, 0, ${flipOutXRotateX(progress)}deg)`,
	opacity: flipOutOpacity(progress),
});

export const flipOutY = (progress: number) => ({
	transform: `rotate3d(0, 1, 0, ${flipOutYRotateY(progress)}deg)`,
	opacity: flipOutOpacity(progress),
});
