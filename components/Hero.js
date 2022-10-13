import React, { useState, useEffect } from "react";
import styles from "../styles/hero.module.scss";
import { connect } from "react-redux";
import Introduction from "./Introduction";
import Image from "next/image";
import gsap from "gsap";
import Panel from "./Panel";
const introTextId = "animate-introText-entrance";
const introImageId = "animate-introImage-entrance";
const avatarId = "animate-avatar-entrance";

const Hero = ({ setIsEntering, setHasEntered, sections: { isEntering } }) => {
	useEffect(() => {
		if (typeof window !== "undefined" && !isEntering) {
			setIsEntering();
			animateEntrance(setHasEntered);
		}
	}, []);

	return (
		<div className={styles.heroContainer}>
			<Introduction introTextId={introTextId} avatarId={avatarId} />
			<Panel
				animateId={introImageId}
				extraStyles={{ borderRadius: "20px" }}
				shadowColor="secondary"
				hoverBoxShadow
			>
				<div className={styles.heroImageContainer}>
					<div className={styles.imageOverlay}>
						<Image
							src="/assets/laylaToreUpToy.jpeg"
							alt="Sometimes a trouble maker"
							layout="fill"
							objectFit="cover"
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

const animateEntrance = (oncomplete) => {
	const tl = gsap.timeline({ onComplete: oncomplete });
	tl.fromTo(
		`#${introImageId}`,
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
			// duration: 1.5,
			duration: 0.5,
			// ease: "elastic.out(1, 0.3)",
			ease: "back.out(1.7)",
		}
	);
	tl.fromTo(
		`#${introTextId}`,
		{
			x: -300,
			opacity: 0,
			// scaleX: 0.1,
			// scaleY: 0.1,
		},
		{ x: 0, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.3)" }
	);
	tl.fromTo(
		`#${avatarId}`,
		{ scaleX: 0, scaleY: 0, opacity: 0 },
		{
			scaleX: 1,
			scaleY: 1,
			opacity: 1,
			duration: 1.5,
			ease: "elastic.out(1, 0.3)",
		},
		"-=1.0"
	);
	gsap.fromTo(
		`#${introImageId}`,
		{
			opacity: 0.2,
		},
		{ opacity: 1, duration: 5, ease: "power4.out" }
	);
};
