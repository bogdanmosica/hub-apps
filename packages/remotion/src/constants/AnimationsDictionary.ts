import {
	heartBeat,
	jello,
	pulse,
	rubberBand,
	shake,
	shakeX,
	shakeY,
	swing,
	tada,
	wobble,
} from '../animations/attention_seekers';
import {
	backInDown,
	backInRight,
	backInLeft,
	backInUp,
} from '../animations/back_entrances';
import {
	backOutLeft,
	backOutDown,
	backOutRight,
	backOutUp,
} from '../animations/back_exits';
import {
	bounceIn,
	bounceInDown,
	bounceInLeft,
	bounceInRight,
	bounceInUp,
} from '../animations/bouncing_entrances';
import {
	bounceOut,
	bounceOutDown,
	bounceOutLeft,
	bounceOutRight,
	bounceOutUp,
} from '../animations/bouncing_exits';
import {
	fadeIn,
	fadeInBottomLeft,
	fadeInBottomRight,
	fadeInDown,
	fadeInDownBig,
	fadeInLeft,
	fadeInLeftBig,
	fadeInRight,
	fadeInRightBig,
	fadeInTopLeft,
	fadeInTopRight,
	fadeInUp,
	fadeInUpBig,
} from '../animations/fading_entrances';
import {
	fadeOut,
	fadeOutBottomLeft,
	fadeOutBottomRight,
	fadeOutDown,
	fadeOutDownBig,
	fadeOutLeft,
	fadeOutLeftBig,
	fadeOutRight,
	fadeOutRightBig,
	fadeOutTopLeft,
	fadeOutTopRight,
	fadeOutUp,
	fadeOutUpBig,
} from '../animations/fading_exits';
import {
	flip,
	flipInX,
	flipInY,
	flipOutX,
	flipOutY,
} from '../animations/flippers';
import {
	lightSpeedInLeft,
	lightSpeedInRight,
	lightSpeedOutLeft,
	lightSpeedOutRight,
} from '../animations/lightspeed';
import {
	rotateIn,
	rotateInDownLeft,
	rotateInDownRight,
	rotateInUpLeft,
	rotateInUpRight,
} from '../animations/rotating_entrances';
import {
	rotateOut,
	rotateOutDownLeft,
	rotateOutDownRight,
	rotateOutUpLeft,
	rotateOutUpRight,
} from '../animations/rotating_exits';
import {
	slideInDown,
	slideInLeft,
	slideInRight,
	slideInUp,
} from '../animations/sliding_entrances';
import {
	slideOutDown,
	slideOutLeft,
	slideOutRight,
	slideOutUp,
} from '../animations/sliding_exits';
import { hinge, jackInTheBox, rollIn, rollOut } from '../animations/specials';
import {
	zoomIn,
	zoomInDown,
	zoomInLeft,
	zoomInRight,
	zoomInUp,
} from '../animations/zooming_entrances';
import {
	zoomOut,
	zoomOutDown,
	zoomOutLeft,
	zoomOutRight,
	zoomOutUp,
} from '../animations/zooming_exits';

export const AnimationsDictionary = {
	attentionSeekers: {
		heartBeat,
		jello,
		pulse,
		rubberBand,
		shake,
		shakeX,
		shakeY,
		swing,
		tada,
		wobble,
	},
	backEntrances: {
		backInDown,
		backInRight,
		backInLeft,
		backInUp,
	},
	backExits: {
		backOutLeft,
		backOutDown,
		backOutRight,
		backOutUp,
	},
	bouncingEntrances: {
		bounceIn,
		bounceInDown,
		bounceInLeft,
		bounceInRight,
		bounceInUp,
	},
	bouncingExits: {
		bounceOut,
		bounceOutDown,
		bounceOutLeft,
		bounceOutRight,
		bounceOutUp,
	},
	fadingEntrances: {
		fadeIn,
		fadeInBottomLeft,
		fadeInBottomRight,
		fadeInDown,
		fadeInDownBig,
		fadeInLeft,
		fadeInLeftBig,
		fadeInRight,
		fadeInRightBig,
		fadeInTopLeft,
		fadeInTopRight,
		fadeInUp,
		fadeInUpBig,
	},
	fadingExits: {
		fadeOut,
		fadeOutBottomLeft,
		fadeOutBottomRight,
		fadeOutDown,
		fadeOutDownBig,
		fadeOutLeft,
		fadeOutLeftBig,
		fadeOutRight,
		fadeOutRightBig,
		fadeOutTopLeft,
		fadeOutTopRight,
		fadeOutUp,
		fadeOutUpBig,
	},
	flippers: {
		flip,
		flipInX,
		flipInY,
		flipOutX,
		flipOutY,
	},
	lightSpeed: {
		lightSpeedInLeft,
		lightSpeedInRight,
		lightSpeedOutLeft,
		lightSpeedOutRight,
	},
	rotatingEntrances: {
		rotateIn,
		rotateInDownLeft,
		rotateInDownRight,
		rotateInUpLeft,
		rotateInUpRight,
	},
	rotatingExits: {
		rotateOut,
		rotateOutDownLeft,
		rotateOutDownRight,
		rotateOutUpLeft,
		rotateOutUpRight,
	},
	slidingEntrances: {
		slideInDown,
		slideInLeft,
		slideInRight,
		slideInUp,
	},
	slidingExits: {
		slideOutDown,
		slideOutLeft,
		slideOutRight,
		slideOutUp,
	},
	specialAnimations: {
		hinge,
		jackInTheBox,
		rollIn,
		rollOut,
	},
	zoomingEntrances: {
		zoomIn,
		zoomInDown,
		zoomInLeft,
		zoomInRight,
		zoomInUp,
	},
	zoomingExits: {
		zoomOut,
		zoomOutDown,
		zoomOutLeft,
		zoomOutRight,
		zoomOutUp,
	},
} as const;
