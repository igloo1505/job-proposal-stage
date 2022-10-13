import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainReducer";
import initialState from "./initialState";

const withDevtools = () => {
	let withTools = process.env.NODE_ENV !== "production" || true;
	return withTools;
};

const store = configureStore({
	reducer: {
		main: mainReducer,
	},
	devTools: () => withDevtools(),
	// devTools: true,
	preloadedState: initialState,
});
if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
	window.store = store;
}

export default store;
