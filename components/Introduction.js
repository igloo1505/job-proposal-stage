import React from "react";
import styles from "../styles/introduction.module.scss";
import clsx from "clsx";
import { Typography } from "@mui/material";
import HeroAvatar from "./HeroAvatar";

const Introduction = ({ introTextId, avatarId, hasInitiallyEntered }) => {
	return (
		<div className={styles.introContainer}>
			<HeroAvatar
				avatarId={avatarId}
				hasInitiallyEntered={hasInitiallyEntered}
			/>
			<Typography
				className={clsx(styles.introText, styles.largeIntro)}
				align="left"
				variant="h6"
				id={introTextId}
			>
				My name is Andrew. This is my best friend Layla.
			</Typography>
		</div>
	);
};

export default Introduction;
