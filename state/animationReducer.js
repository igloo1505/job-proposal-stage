import * as Types from "./Types";
import store from "./store";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	animationCancelValues: {
		coldAvatar: null,
	},
};

const animationsReducer = createReducer(initialState, (builder) => {
	builder.addCase(Types.SET_COLD_ANIMATION_CANCEL_VALUE, (state, action) => {
		return {
			...state,
			animationCancelValues: { coldAvatar: action.payload },
		};
	});
});

export default animationsReducer;
