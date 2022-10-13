import React, { useState, useEffect } from "react";
import styles from "../styles/panel.module.scss";
import { useTheme } from "@mui/material/styles";

const Panel = ({ hoverBoxShadow, children }) => {
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
				hoverBoxShadow && isHovered && styles.panelBoxShadowMain
			}`}
			style={{ backgroundColor: theme.palette.panel.main }}
			onMouseEnter={() => handleHover(true)}
			onMouseLeave={() => handleHover(false)}
		>
			{children}
		</div>
	);
};

export default Panel;
