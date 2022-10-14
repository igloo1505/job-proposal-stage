import * as varAnim from "../animations/variousAnimations";

const observe = (section) => {
	if (section === 1) {
		varAnim.occasionallyAnimateCold();
	}
	if (section !== 1) {
		varAnim.cancelColdAnimationInterval();
	}
};

export default observe;
