import React, { useState, useEffect } from "react";
import styles from "../styles/panel.module.scss";
import { useTheme } from "@mui/material/styles";

const Panel = ({
	hoverBoxShadow,
	animateId,
	extraStyles,
	shadowColor = "primary",
	children,
}) => {
	const theme = useTheme();
	const [isHovered, setIsHovered] = useState(false);
	const handleHover = (value) => {
		if (hoverBoxShadow) {
			setIsHovered(value);
		}
	};

	return (
		<div
			className={`${styles.panelContainer} ${
				isHovered && styles[`panelBoxShadow_${shadowColor}`]
			}`}
			style={{ backgroundColor: theme.palette.panel.main, ...extraStyles }}
			onMouseEnter={() => handleHover(true)}
			onMouseLeave={() => handleHover(false)}
			id={animateId}
		>
			{children}
		</div>
	);
};

export default Panel;
