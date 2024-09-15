import { rotateInOpacity } from '../../interpolations/opacity';
import {
	rotateInRotateZ,
	rotateInDownLeftRotateZ,
	rotateInDownRightRotateZ,
	rotateInUpLeftRotateZ,
	rotateInUpRightRotateZ,
} from '../../interpolations/rotate';

export const rotateIn = (progress: number) =>
	`rotate3d(0, 0, 1, ${rotateInRotateZ(progress)}deg) opacity(${rotateInOpacity(progress)})`;

export const rotateInDownLeft = (progress: number) =>
	`rotate3d(0, 0, 1, ${rotateInDownLeftRotateZ(progress)}deg) opacity(${rotateInOpacity(progress)})`;

export const rotateInDownRight = (progress: number) =>
	`rotate3d(0, 0, 1, ${rotateInDownRightRotateZ(progress)}deg) opacity(${rotateInOpacity(progress)})`;

export const rotateInUpLeft = (progress: number) =>
	`rotate3d(0, 0, 1, ${rotateInUpLeftRotateZ(progress)}deg) opacity(${rotateInOpacity(progress)})`;

export const rotateInUpRight = (progress: number) =>
	`rotate3d(0, 0, 1, ${rotateInUpRightRotateZ(progress)}deg) opacity(${rotateInOpacity(progress)})`;
