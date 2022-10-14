import React, { useState, useEffect } from "react";
import styles from "../../styles/photoStackText.module.scss";
import { connect } from "react-redux";
import { Typography } from "@mui/material";
Typography;
import * as ids from "../../animations/domIDs";
import enterAnim from "../../animations/enterAnimations";
import exitAnim from "../../animations/exitAnimations";
import * as stackAnim from "../../animations/stackAnimations";
import clsx from "clsx";

const PhotoStackText = ({
	activePhotoIndex,
	setActivePhotoIndex,
	data,
	sections: { activeSection },
}) => {
	useEffect(() => {
		if (activeSection === 2) {
			enterAnim[2];
		}
		if (activeSection !== 2) {
			exitAnim[2];
		}
	}, [activeSection]);

	return (
		<div
			className={clsx(
				styles.photoStackTextContainer,
				activeSection === 2
					? styles.photoStackTextContainer_show
					: styles.photoStackTextContainer_hidden
			)}
		>
			{data.map((d) => {
				return (
					<div
						key={`photoStack-display-text-${d.index}`}
						className={styles.photoStackTextContainerInner}
						id={ids.photoStackTextContainerID(d.index)}
					>
						<Typography id={ids.photoStackTextID(d.index)} variant="h6">
							{d.displayText}
						</Typography>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	sections: state.sections,
});

export default connect(mapStateToProps)(PhotoStackText);
