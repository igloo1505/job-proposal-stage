import React, { useState, useEffect } from "react";
import styles from "../styles/hero.module.scss";
import Introduction from "./Introduction";
import Image from "next/image";
import gsap from "gsap";

const introTextId = "animate-introText-entrance";
const introImageId = "animate-introImage-entrance";
const avatarId = "animate-avatar-entrance";
const Hero = () => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			animateEntrance();
		}
	}, []);

	return (
		<div className={styles.heroContainer}>
			<Introduction introTextId={introTextId} avatarId={avatarId} />
			<div className={styles.heroImageContainer}>
				<div className={styles.imageOverlay}>
					<Image
						src="/assets/laylaToreUpToy.jpeg"
						alt="Sometimes a trouble maker"
						layout="fill"
						objectFit="cover"
						className={styles.heroImage}
						id={introImageId}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;

const animateEntrance = () => {
	const tl = gsap.timeline();
	tl.fromTo(
		`#${introImageId}`,
		{
			y: -300,
			scaleX: 0.1,
			scaleY: 0.1,
		},
		{ y: 0, scaleX: 1, scaleY: 1, duration: 1.5, ease: "elastic.out(1, 0.3)" }
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
		{ opacity: 1, duration: 7.5, ease: "power4.out" }
	);
};
