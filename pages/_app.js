import React, { useEffect, Fragment, useState } from "react";
import global from "../styles/global.scss";
import createCache from "@emotion/cache";
import { isMobile } from "mobile-device-detect";
// import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import mainTheme from "../styles/mainTheme";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import store from "../state/store";
import { updateUISpecs } from "../state/actions";

const createEmotionCache = () => {
	return createCache({ key: "css", prepend: true });
};
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("resize", updateUISpecs);
		}
	}, []);

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={mainTheme}>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
