import { createTheme } from "@mui/material/styles";
import { cyan } from "@mui/material/colors";
// Replica theme in mui tool: https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=00E5FF&secondary.color=E040FB

// const defaultFontFamily = "'Roboto Condensed', sans-serif";
const _fontFamily = "'Poppins', sans-serif";
const defaultTextColor = "#fff";
const MUITheme = createTheme({
	breakpoints: {
		xs: 0,
		sm: 600,
		md: 960,
		lg: 1280,
		xl: 1920,
	},
	// shadows: [

	// ],
	typography: {
		htmlFontSize: 16,
		fontFamily: _fontFamily,
		fontSize: 16,
		color: "#fff",
		fontWeightLight: 200,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 600,
		// 	h1: {
		// 		fontFamily: defaultFontFamily,
		// 		fontWeight: 300,
		// 		fontSize: "4rem",
		// 		lineHeight: 1.167,
		// 		letterSpacing: "-0.01562em",
		// 		color: defaultTextColor,
		// 		backgroundColor: "transparent",
		// 	},
		// 	h2: {
		// 		fontFamily: defaultFontFamily,
		// 		fontWeight: 300,
		// 		fontSize: "3.75rem",
		// 		lineHeight: 1.2,
		// 		letterSpacing: "-0.00833em",
		// 		color: defaultTextColor,
		// 		backgroundColor: "transparent",
		// 	},
		// 	h3: {
		// 		fontFamily: defaultFontFamily,
		// 		fontWeight: 400,
		// 		fontSize: "3rem",
		// 		lineHeight: 1.167,
		// 		letterSpacing: "0em",
		// 		color: defaultTextColor,
		// 		backgroundColor: "transparent",
		// 	},
		// 	h4: {
		// 		fontFamily: defaultFontFamily,
		// 		fontWeight: 400,
		// 		fontSize: "2.125rem",
		// 		lineHeight: 1.235,
		// 		letterSpacing: "0.00735em",
		// 		color: defaultTextColor,
		// 		backgroundColor: "transparent",
		// 	},
		// 	h5: {
		// 		fontFamily: defaultFontFamily,
		// 		fontWeight: 400,
		// 		fontSize: "1.5rem",
		// 		lineHeight: 1.334,
		// 		letterSpacing: "0em",
		// 		color: defaultTextColor,
		// 		backgroundColor: "transparent",
		// 	},
		// 	h6: {
		// 		fontFamily: defaultFontFamily,
		// 		fontWeight: 400,
		// 		fontSize: "1.1rem",
		// 		lineHeight: 1.6,
		// 		letterSpacing: "0.0075em",
		// 		color: defaultTextColor,
		// 		backgroundColor: "transparent",
		// 	},
		// 	subtitle1: {
		// 		fontFamily: defaultFontFamily,
		// 		fontWeight: 400,
		// 		fontSize: "1rem",
		// 		lineHeight: 1.75,
		// 		letterSpacing: "0.00938em",
		// 		color: defaultTextColor,
		// 	},
		// 	subtitle2: {
		// 		fontFamily: defaultFontFamily,
		// 		fontWeight: 500,
		// 		fontSize: "0.875rem",
		// 		lineHeight: 1.57,
		// 		letterSpacing: "0.00714em",
		// 		color: defaultTextColor,
		// 	},
		body1: {
			fontFamily: _fontFamily,
			fontWeight: 400,
			fontSize: "1rem",
			lineHeight: 1.5,
			// letterSpacing: "0.00938em",
			color: defaultTextColor,
		},
		body2: {
			fontFamily: _fontFamily,
			fontWeight: 600,
			fontSize: "1.2rem",
			lineHeight: 1.43,
			// letterSpacing: "0.01071em",
			color: defaultTextColor,
		},
		// 	button: {
		// 		fontFamily: defaultFontFamily,
		// 		fontWeight: 500,
		// 		fontSize: "0.875rem",
		// 		lineHeight: 1.75,
		// 		letterSpacing: "0.02857em",
		// 		textTransform: "uppercase",
		// 	},
		// 	caption: {
		// 		fontFamily: defaultFontFamily,
		// 		fontWeight: 400,
		// 		fontSize: "0.75rem",
		// 		lineHeight: 1.66,
		// 		letterSpacing: "0.03333em",
		// 		color: defaultTextColor,
		// 	},
		// 	overline: {
		// 		fontFamily: defaultFontFamily,
		// 		fontWeight: 400,
		// 		fontSize: "0.75rem",
		// 		lineHeight: 2.66,
		// 		letterSpacing: "0.08333em",
		// 		textTransform: "uppercase",
		// 		color: defaultTextColor,
		// 	},
	},
	panelBoxShadows: ["20px 20px 60px #cacaca, -20px -20px 60px #f6f6f6"],
	palette: {
		common: {
			black: "#000",
			white: "#fff",
			paperLight: "#ecf0f3",
			type: "dark",
		},
		primary: {
			light: "#6effff",
			main: "#00e5ff",
			dark: "#00b2cc",
			contrastText: "#fff",
		},
		secondary: {
			light: "#ff79ff",
			main: "#e040fb",
			dark: "#aa00c7",
			contrastText: "#fff",
		},
		panel: {
			ultraLight: "#6d6d6d",
			light: "#424242",
			main: "#212121",
			dark: "#1b1b1b",
		},
		error: {
			light: "#e57373",
			main: "#f03e3e",
			dark: "#d32f2f",
			contrastText: "#fff",
		},
		warning: {
			light: "#ffb74d",
			main: "#ff9800",
			dark: "#f57c00",
			contrastText: "rgba(0, 0, 0, 0.87)",
		},
		info: {
			light: "#64b5f6",
			main: "#2196f3",
			dark: "#1976d2",
			contrastText: "#fff",
		},
		success: {
			light: "#81c784",
			main: "#00E676",
			dark: "#388e3c",
			contrastText: "rgba(0, 0, 0, 0.87)",
		},
		grey: {
			50: "#fafafa",
			100: "#f5f5f5",
			200: "#eeeeee",
			300: "#e0e0e0",
			400: "#bdbdbd",
			500: "#9e9e9e",
			600: "#757575",
			700: "#616161",
			800: "#424242",
			900: "#212121",
			A100: "#d5d5d5",
			A200: "#aaaaaa",
			A400: "#303030",
			A700: "#616161",
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
});

export default MUITheme;