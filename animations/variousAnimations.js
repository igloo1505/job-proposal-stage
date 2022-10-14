import * as ids from "./domIDs";
import { _id } from "../utils/utilFunctions";
import avatarStyles from "../styles/HeroAvatar.module.scss";
import store from "../state/store";
import * as Types from "../state/Types";

export const winkyWinky = (delay = 0) => {
	const em = document.getElementById(ids.fadeToWink);
	setTimeout(() => {
		em.classList.add(avatarStyles.hideAvatar);
	}, delay);
	setTimeout(() => {
		em.classList.remove(avatarStyles.hideAvatar);
	}, delay + 500);
};

export const burrrr = () => {
	const em = document.getElementById(ids.fadeToWink);
	setTimeout(() => {
		em.classList.add(avatarStyles.avatarChilly);
	}, 1000);
	setTimeout(() => {
		em.classList.remove(avatarStyles.avatarChilly);
	}, 1500);
};

export const occasionallyAnimateCold = (interval = 7000) => {
	const cancelValue = setInterval(burrrr, interval);
	store.dispatch({
		type: Types.SET_COLD_ANIMATION_CANCEL_VALUE,
		payload: cancelValue,
	});
};

export const cancelColdAnimationInterval = () => {
	const val = store.getState()?.animations?.animationCancelValues?.coldAvatar;
	if (val) clearInterval(val);
};
