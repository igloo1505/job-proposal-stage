import gsap from "gsap";
import * as ids from "./domIDs";
import { _id } from "../utils/utilFunctions";
import introStyles from "../styles/introduction.module.scss";

const clearSections = {
	1: (enterNewSection) => {
		const tl = gsap.timeline({ onComplete: enterNewSection });
		let underlineEm = document.getElementById(ids.bestFriendUnderline);
		if (underlineEm) {
			underlineEm.classList.add(introStyles.underlineContainerHide);
		}
		tl.to(_id(ids.avatarId), {
			x: 300,
			y: 75,
			rotateZ: 720,
			scale: 0.3,
			duration: 0.75,
		});
		tl.to(
			_id(ids.introImageId),
			{
				// scaleX: 0.4,
				scaleY: 0,
				transformOrigin: "top",
				// y: -500,
				opacity: 0,
				duration: 0.3,
			},
			"-=0.2"
		);
		tl.to(_id(ids.introTextId), {
			opacity: 0,
			stagger: 0.2,
			duration: 0.5,
		});
	},
	2: (enterNewSection) => {
		enterNewSection();
	},
	3: (enterNewSection) => {
		enterNewSection();
	},
};

export default clearSections;
