import React from "react";
import Panel from "../components/Panel";
import Hero from "../components/Hero";
import { connect, useDispatch } from "react-redux";
import * as Types from "../state/Types";
import { observerUnderlineTarget } from "../animations/enterAnimations";
const SectionOne = ({ sections: { isEntering }, enterAnimation }) => {
	const dispatch = useDispatch();
	const setIsEntering = () => {
		if (!isEntering && typeof window !== "undefined") {
			dispatch({
				type: Types.SET_IS_ENTERING,
				payload: true,
			});
		}
	};
	const setHasEntered = () => {
		dispatch({
			type: Types.SET_STABLE_SECTION,
			payload: 1,
		});
	};
	return (
		<div>
			<Hero
				setIsEntering={setIsEntering}
				setHasEntered={setHasEntered}
				enterAnimation={enterAnimation}
			/>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	sections: state.sections,
});

export default connect(mapStateToProps)(SectionOne);
