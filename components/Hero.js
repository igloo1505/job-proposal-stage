import React, { useState, useEffect } from "react";
import styles from "../styles/hero.module.scss";
import { connect } from "react-redux";
import Introduction from "./Introduction";
import Image from "next/image";
import Panel from "./Panel";
import * as ids from "../animations/domIDs";

const Hero = ({
	setIsEntering,
	setHasEntered,
	sections: { isEntering },
	enterAnimation,
}) => {
	const [hasInitiallyEntered, setHasInitiallyEntered] = useState(false);
	const handleCompleteAnimation = () => {
		setHasEntered();
		setHasInitiallyEntered(true);
	};
	useEffect(() => {
		if (typeof window !== "undefined" && !isEntering) {
			setIsEntering();
			enterAnimation(handleCompleteAnimation);
		}
	}, []);

	return (
		<div className={styles.heroContainer}>
			<Introduction
				introTextId={ids.introTextId}
				avatarId={ids.avatarId}
				hasInitiallyEntered={hasInitiallyEntered}
			/>
			<Panel
				animateId={ids.introImageId}
				extraStyles={{ borderRadius: "20px", zIndex: 10 }}
				shadowColor="secondary"
				hoverBoxShadow
			>
				<div className={styles.heroImageContainer}>
					<div className={styles.imageOverlay}>
						<Image
							src="/assets/laylaToreUpToy.jpeg"
							alt="Sometimes a trouble maker"
							layout="fill"
							// objectFit="cover"
							objectFit="cover"
							objectPosition="50% top"
							className={styles.heroImage}
						/>
					</div>
				</div>
			</Panel>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	sections: state.sections,
});

export default connect(mapStateToProps)(Hero);
