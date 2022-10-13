import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		console.log("this.props", this.props.emotionStyleTags);
		return (
			<Html lang="en">
				<Head>
					<meta name="application-name" content="Job Proposal" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta name="apple-mobile-web-app-title" content="Job Proposal" />
					<meta name="description" content="Hire me so I can feed my puppy!" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta
						name="msapplication-config"
						content="/icons/browserconfig.xml"
					/>
					<meta name="msapplication-TileColor" content="#2B5797" />
					<meta name="msapplication-tap-highlight" content="no" />
					<meta name="theme-color" content="#fff" />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/icons/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/icons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/icons/favicon-16x16.png"
					/>
					<link rel="manifest" href="/manifest.json" />
					<link rel="shortcut icon" href="/icons/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
					/>

					<meta property="og:type" content="website" />
					<meta property="og:title" content="Job Proposal" />
					<meta
						property="og:description"
						content="Hire me so I can feed my puppy!"
					/>
					<meta property="og:site_name" content="Job Proposal" />
					<meta
						property="og:image"
						content="https://yourdomain.com/icons/apple-touch-icon.png"
					/>
					{this.props.emotionStyleTags}
				</Head>
				<body>
					<div id="topLevelPortalContainer" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// Maybe add this back in after deployment...
// <meta property="og:url" content="https://yourdomain.com" />

// BUG: Comeback to this if server rendering issue arises. Needed this previously but no longer in docs and seemingly not in module.
// import { ServerStyleSheets } from "@material-ui/core/styles";
// MyDocument.getInitialProps = async (ctx) => {
// 	// Resolution order
// 	//
// 	// On the server:
// 	// 1. app.getInitialProps
// 	// 2. page.getInitialProps
// 	// 3. document.getInitialProps
// 	// 4. app.render
// 	// 5. page.render
// 	// 6. document.render
// 	//
// 	// On the server with error:
// 	// 1. document.getInitialProps
// 	// 2. app.render
// 	// 3. page.render
// 	// 4. document.render
// 	//
// 	// On the client
// 	// 1. app.getInitialProps
// 	// 2. page.getInitialProps
// 	// 3. app.render
// 	// 4. page.render

// 	// Render app and page and get the context of the page with collected side effects.
// 	const sheets = new ServerStyleSheets();
// 	const originalRenderPage = ctx.renderPage;

// 	ctx.renderPage = () =>
// 		originalRenderPage({
// 			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
// 		});

// 	const initialProps = await Document.getInitialProps(ctx);

// 	return {
// 		...initialProps,
// 		// Styles fragment is rendered after the app and page rendering finish.
// 		styles: [
// 			...React.Children.toArray(initialProps.styles),
// 			sheets.getStyleElement(),
// 		],
// 	};
// };
