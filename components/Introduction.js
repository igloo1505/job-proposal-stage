import React, { useEffect, useState } from "react";
import styles from "../styles/introduction.module.scss";
import clsx from "clsx";
import { Typography } from "@mui/material";
import HeroAvatar from "./HeroAvatar";
import * as ids from "../animations/domIDs";
import Image from "next/image";
import { connect } from "react-redux";
import { observerUnderlineTarget } from "../animations/enterAnimations";
const Introduction = ({
	introTextId,
	avatarId,
	hasInitiallyEntered,
	sections: { isEntering, activeSection },
}) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("resize", observerUnderlineTarget);
		}
	}, []);

	return (
		<div className={styles.introContainer}>
			<HeroAvatar
				avatarId={avatarId}
				hasInitiallyEntered={hasInitiallyEntered}
			/>
			<div
				className={clsx(
					styles.underlineContainer,
					styles.underlineContainerHide
				)}
				id={ids.bestFriendUnderline}
			>
				<Image
					src="/assets/underlinePrimary.png"
					alt="underline image"
					width={70}
					height={70}
					layout="responsive"
					objectFit="cover"
					className={styles.bestFriendUnderline}
				/>
			</div>
			<Typography
				className={clsx(styles.introText, styles.largeIntro)}
				align="left"
				variant="h6"
				id={introTextId}
			>
				My name is Andrew. This is my{" "}
				<span id={ids.textTarget_bestFriend}>best</span> friend Layla.
			</Typography>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	sections: state.sections,
});

export default connect(mapStateToProps)(Introduction);
