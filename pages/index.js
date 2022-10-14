import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import SectionOne from "../sections/SectionOne";
import SectionTwo from "../sections/SectionTwo";
import SectionThree from "../sections/SectionThree";
import { useGesture, useDrag, useScroll, useWheel } from "@use-gesture/react";
import { connect } from "react-redux";
import { Lethargy } from "lethargy";
import { handleTransition } from "../state/actions";
import enterSections from "../animations/enterAnimations";
import clearSections from "../animations/exitAnimations";
import sectionObserver from "../utils/sectionObserver";

const maxSections = 3;
const lethargy = new Lethargy();

const Home = ({ sections: { isEntering, activeSection } }) => {
	const myRef = useRef(null);
	const dragConfig = {
		target: myRef,
		threshold: 50,
	};
	const wheelConfig = {
		target: myRef,
		threshold: 20,
	};
	const scrollConfig = {
		target: myRef,
		threshold: 20,
	};
	const [gestureConfig, setGestureConfig] = useState({
		scroll: scrollConfig,
		wheel: wheelConfig,
		drag: dragConfig,
	});
	useEffect(() => {
		sectionObserver(activeSection);
	}, [activeSection]);

	const handleSectionState = (gestureState) => {
		console.log("gestureState: ", gestureState);
		if (!gestureState.last) {
			const s = lethargy.check(gestureState.event);
			if (s) {
				let newSec = activeSection;
				let shouldAnimate = false;
				if (s < 0 && activeSection !== maxSections) {
					newSec = activeSection + 1;
					shouldAnimate = true;
				}
				if (s > 0 && activeSection !== 1) {
					newSec = activeSection - 1;
					shouldAnimate = true;
				}
				if (shouldAnimate) {
					handleTransition(
						newSec,
						clearSections[activeSection],
						enterSections[newSec]
					);
				}
			}
		}
	};
	// TODO In the morning resume by breaking these up into seperate useDrag, useWheel... functions and pass in ref to get over this bug
	useDrag((gestureState) => handleSectionState(gestureState), dragConfig);
	useWheel((gestureState) => handleSectionState(gestureState), wheelConfig);
	useScroll((gestureState) => handleSectionState(gestureState), scrollConfig);
	// useEffect(() => {
	// 	if (typeof window !== "undefined") {
	// 		document.addEventListener("gesturestart", (e) => e.preventDefault());
	// 		document.addEventListener("gesturechange", (e) => e.preventDefault());
	// 	}
	// }, []);
	useEffect(() => {
		setGestureConfig({
			scroll: {
				enabled: !isEntering,
				...scrollConfig,
			},
			wheel: {
				enabled: !isEntering,
				...wheelConfig,
			},
			drag: {
				enabled: !isEntering,
				...dragConfig,
			},
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isEntering]);

	return (
		<div className={styles.gestureWrapper} ref={myRef}>
			<div className={styles.mainContainer}>
				<SectionOne enterAnimation={enterSections[1]} />
				<SectionTwo />
				<SectionThree />
			</div>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	sections: state.sections,
});

export default connect(mapStateToProps)(Home);
