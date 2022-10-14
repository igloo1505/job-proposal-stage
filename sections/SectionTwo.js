import React, { useState, useEffect } from "react";
import PhotoStack from "../components/sectionTwo/PhotoStack";
import PhotoStackText from "../components/sectionTwo/PhotoStackText";
import styles from "../styles/sectionTwo.module.scss";
import data from "../utils/photoStackData";
import { connect } from "react-redux";
import clsx from "clsx";

const SectionTwo = ({ sections: { activeSection } }) => {
	const [activePhotoIndex, setActivePhotoIndex] = useState(-1);
	return (
		<div
			className={clsx(
				styles.sectionTwoContainer,
				activeSection === 2
					? styles.sectionTwoContainer_show
					: styles.sectionTwoContainer_hidden
			)}
		>
			<PhotoStack
				activePhotoIndex={activePhotoIndex}
				setActivePhotoIndex={setActivePhotoIndex}
				data={data}
			/>
			<PhotoStackText
				activePhotoIndex={activePhotoIndex}
				setActivePhotoIndex={setActivePhotoIndex}
				data={data}
			/>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	sections: state.sections,
});

export default connect(mapStateToProps)(SectionTwo);
