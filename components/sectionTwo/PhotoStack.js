import React, { useState, useEffect } from "react";
import styles from "../../styles/photoStack.module.scss";
import Image from "next/image";
import clsx from "clsx";
import { connect } from "react-redux";
import enterAnim from "../../animations/enterAnimations";
import exitAnim from "../../animations/exitAnimations";
import * as stackAnim from "../../animations/stackAnimations";
import * as ids from "../../animations/domIDs";
import Panel from "../Panel";

const PhotoStack = ({
	activePhotoIndex,
	setActivePhotoIndex,
	data,
	sections: { activeSection },
}) => {
	const [isInitialRender, setIsInitialRender] = useState(true);
	const [currentActiveIndex, setCurrentActiveIndex] = useState(-1);
	useEffect(() => {
		if (!isInitialRender) {
			stackAnim.changeActiveIndex(currentActiveIndex, activePhotoIndex);
		}
	}, [activePhotoIndex]);

	useEffect(() => {
		if (activeSection === 2) {
			enterAnim[2](() => {
				setIsInitialRender(false);
				setCurrentActiveIndex(0);
			});
		}
		if (activeSection !== 2) {
			exitAnim[2](() => {
				setIsInitialRender(true);
				setCurrentActiveIndex(-1);
			});
		}
		console.log("activeSection here: ", activeSection);
	}, [activeSection]);
	return (
		<div
			className={clsx(
				styles.photoStackContainer,
				activeSection === 2
					? styles.photoStackContainer_show
					: styles.photoStackContainer_hidden
			)}
		>
			{data.map((d) => {
				return (
					<div
						className={styles.photoStackPhotoContainer}
						id={ids.photoStackPhotoContainerID(d.index)}
						key={`photostackImage${d.index}`}
					>
						<Panel hoverBoxShadow={currentActiveIndex === d.index}>
							<Image
								src={d.imagePath}
								alt="Photo stack image"
								layout="responsive"
								width={500}
								height={500}
								id={ids.photoStackPhotoID(d.index)}
							/>
						</Panel>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	sections: state.sections,
});

export default connect(mapStateToProps)(PhotoStack);
