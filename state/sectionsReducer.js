import * as Types from "./Types";
import store from "./store";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	activeSection: 1,
	isEntering: false,
	shouldTransitionOut: false,
	shouldTransitionIn: true,
};

const sectionReducer = createReducer(initialState, (builder) => {
	builder.addCase(Types.SET_ACTIVE_SECTION, (state, action) => {
		return {
			...state,
			activeSection: action.payload,
		};
	});
	builder.addCase(Types.SET_IS_ENTERING, (state, action) => {
		return {
			...state,
			isEntering: true,
			activeSection: null,
		};
	});
	builder.addCase(Types.SET_STABLE_SECTION, (state, action) => {
		return {
			...state,
			activeSection: action.payload,
		};
	});
});

export default sectionReducer;
