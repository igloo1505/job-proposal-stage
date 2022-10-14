import * as Types from "./Types";
import store from "./store";

export const updateUISpecs = (e) => {
	store.dispatch({
		type: Types.SET_VIEWPORT,
		payload: {
			width: e.target.innerWidth,
			height: e.target.innerHeight,
		},
	});
};

export const handleTransition = (newSection, clearSection, enterSection) => {
	store.dispatch({
		type: Types.SET_IS_ENTERING,
	});
	// Clear section takes in the new entering function to call on complete, and enter section calls the setStable function.
	clearSection(() => {
		enterSection(() => {
			store.dispatch({
				type: Types.SET_STABLE_SECTION,
				payload: newSection,
			});
		});
	});
};
