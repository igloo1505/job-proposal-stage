import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import SectionOne from "../sections/SectionOne";
import SectionTwo from "../sections/SectionTwo";
import SectionThree from "../sections/SectionThree";

export default function Home() {
	return (
		<div className={styles.mainContainer}>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
		</div>
	);
}
