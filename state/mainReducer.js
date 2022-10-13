import * as Types from "./Types";
import store from "./store";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	viewport: {
		width: null,
		height: null,
	},
};

const mainReducer = createReducer(initialState, (builder) => {
	builder.addCase(Types.SET_VIEWPORT, (state, action) => {
		return {
			...state,
			viewport: {
				...action.payload,
			},
		};
	});
});

export default mainReducer;
