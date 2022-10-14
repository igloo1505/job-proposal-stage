import React from "react";
import styles from "../styles/sectionThree.module.scss";
import { connect } from "react-redux";
import clsx from "clsx";

const SectionThree = ({ sections: { activeSection } }) => {
	return (
		<div
			className={clsx(
				styles.sectionThreeContainer,
				activeSection === 3
					? styles.sectionThreeContainer_show
					: styles.sectionThreeContainer_hidden
			)}
		>
			SectionThree
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	sections: state.sections,
});

export default connect(mapStateToProps)(SectionThree);
