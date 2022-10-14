import React, { useState, useEffect } from "react";
import styles from "../styles/HeroAvatar.module.scss";
import Image from "next/image";
import clsx from "clsx";
import {
	winkyWinky,
	occasionallyAnimateCold,
} from "../animations/variousAnimations";
import * as ids from "../animations/domIDs";

const HeroAvatar = ({ avatarId, hasInitiallyEntered }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [hasLoaded, setHasLoaded] = useState(false);
	const [hasUsedCheesyToggle, setHasUsedCheesyToggle] = useState(false);

	const handleMouse = (val) => {
		if (hasLoaded) {
			setIsHovered(val);
			// winkyWinky();
		}
	};
	useEffect(() => {
		if (hasInitiallyEntered && hasLoaded) {
			setTimeout(() => {
				setHasUsedCheesyToggle(true);
				winkyWinky();
			}, 1000);
		}
	}, [hasLoaded, hasInitiallyEntered]);

	return (
		<div className={styles.heroAvatarContainer}>
			<div
				className={styles.heroAvatarContainerInner}
				onMouseEnter={() => handleMouse(true)}
				onMouseLeave={() => handleMouse(false)}
				id={avatarId}
			>
				<Image
					src="/assets/avatarWinking.png"
					alt="avatar image"
					width={150}
					height={150}
					className={styles.heroAvatar}
				/>
				<Image
					src="/assets/avatarNormal.png"
					alt="avatar image winking"
					width={150}
					height={150}
					onLoadingComplete={() => setHasLoaded(true)}
					className={clsx(styles.heroAvatar, isHovered && styles.hideAvatar)}
					id={ids.fadeToWink}
				/>
			</div>
		</div>
	);
};

export default HeroAvatar;
