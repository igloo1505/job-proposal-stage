import React, { useState, useEffect } from "react";
import PhotoStack from "../components/sectionTwo/PhotoStack";
import PhotoStackText from "../components/sectionTwo/PhotoStackText";
import styles from "../styles/sectionTwo.module.scss";
const SectionTwo = () => {
	return (
		<div className={styles.sectionTwoContainer}>
			<PhotoStack />
			<PhotoStackText />
		</div>
	);
};

export default SectionTwo;
