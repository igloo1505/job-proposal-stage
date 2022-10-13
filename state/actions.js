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
