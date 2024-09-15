import { bounceInOpacity } from '../../interpolations/opacity';
import {
	bounceInScale,
	bounceInDownScaleY,
	bounceInLeftScaleX,
	bounceInRightScaleX,
	bounceInUpScaleY,
} from '../../interpolations/scale';
import {
	bounceInDownTranslateY,
	bounceInLeftTranslateX,
	bounceInRightTranslateX,
	bounceInUpTranslateY,
} from '../../interpolations/translate';

export const bounceIn = (progress: number) =>
	`scale3d(${bounceInScale(progress)}, ${bounceInScale(progress)}, ${bounceInScale(progress)}) opacity(${bounceInOpacity(progress)})`;

export const bounceInDown = (progress: number) =>
	`translateY(${bounceInDownTranslateY(progress)}px) scaleY(${bounceInDownScaleY(progress)}) opacity(${bounceInOpacity(progress)})`;

export const bounceInLeft = (progress: number) =>
	`translateX(${bounceInLeftTranslateX(progress)}px) scaleX(${bounceInLeftScaleX(progress)}) opacity(${bounceInOpacity(progress)})`;

export const bounceInRight = (progress: number) =>
	`translateX(${bounceInRightTranslateX(progress)}px) scaleX(${bounceInRightScaleX(progress)}) opacity(${bounceInOpacity(progress)})`;

export const bounceInUp = (progress: number) =>
	`translateY(${bounceInUpTranslateY(progress)}px) scaleY(${bounceInUpScaleY(progress)}) opacity(${bounceInOpacity(progress)})`;
