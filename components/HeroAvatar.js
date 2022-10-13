import React, { useState, useEffect } from "react";
import styles from "../styles/HeroAvatar.module.scss";
import Image from "next/image";
import clsx from "clsx";

const HeroAvatar = ({ avatarId }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [hasLoaded, setHasLoaded] = useState(false);

	const handleMouse = (val) => {
		if (hasLoaded) {
			console.log("setting is Hovered");
			setIsHovered(val);
		}
	};

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
				/>
			</div>
		</div>
	);
};

export default HeroAvatar;
