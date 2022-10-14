import gsap from "gsap";
import * as ids from "./domIDs";
import { _id } from "../utils/utilFunctions";
import { winkyWinky } from "./variousAnimations";
import introStyles from "../styles/introduction.module.scss";

export const observerUnderlineTarget = (e) => {
	let targetEm = document.getElementById(ids.textTarget_bestFriend);
	let underlineEm = document.getElementById(ids.bestFriendUnderline);
	if (targetEm && underlineEm) {
		let targetRect = targetEm.getBoundingClientRect();
		underlineEm.style.width = `calc(${targetRect.width}px + 1rem)`;
		underlineEm.style.top = `calc(${targetRect.top}px + 1.4rem)`;
		underlineEm.style.left = `calc(${targetRect.left}px - 0.5rem)`;
		underlineEm.classList.remove(introStyles.underlineContainerHide);
		console.log(
			"introStyles.underlineContainerHide: ",
			introStyles.underlineContainerHide
		);
	}
};

const enterSections = {
	1: (oncomplete) => {
		console.log("Enter section one");
		const tl = gsap.timeline({
			onComplete: () => {
				oncomplete();
				observerUnderlineTarget();
			},
		});
		tl.fromTo(
			`#${ids.introImageId}`,
			{
				y: -300,
				x: 500,
				scaleX: 0.1,
				scaleY: 0.1,
			},
			{
				y: 0,
				x: 0,
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				// duration: 1.5,
				duration: 0.5,
				// ease: "elastic.out(1, 0.3)",
				ease: "back.out(1.7)",
			}
		);
		tl.fromTo(
			`#${ids.introTextId}`,
			{
				x: -300,
				opacity: 0,
				// scaleX: 0.1,
				// scaleY: 0.1,
			},
			{ x: 0, opacity: 1, duration: 1.0, stagger: 0, ease: "bounce.out" }
		);
		gsap.to(_id(ids.avatarId), {
			x: 0,
			y: 0,
			immediateRender: true,
		});
		// tl.fromTo(
		// 	`#${ids.avatarId}`,
		// 	{ scaleX: 0, scaleY: 0, opacity: 0 },
		// 	{
		// 		scaleX: 1,
		// 		scaleY: 1,
		// 		opacity: 1,
		// 		duration: 1.5,
		// 		ease: "elastic.out(1, 0.3)",
		// 	},
		// 	"-=0.3"
		// );
		tl.to(
			_id(ids.avatarId),
			{
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				duration: 1.5,
				ease: "elastic.out(1, 0.3)",
			},
			"-=0.3"
		);
	},
	2: (onComplete) => {
		console.log("Enter section two");
		onComplete();
	},
	3: (onComplete) => {
		console.log("Enter section three");
		onComplete();
	},
};

export default enterSections;
