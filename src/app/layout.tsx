import type { Metadata } from "next";
import "./globals.css";
import BurgerMenu from "@/components/burger-menu";

export const metadata: Metadata = {
	title: "Très chair corps",
	description: "Très chair corps - seule en scène improvisé",
	metadataBase: new URL("https://treschaircorps.fr"),
	icons: {
		icon: "/favicon.svg",
	},
	openGraph: {
		title: "Très chair corps",
		description: "Très chair corps - seule en scène improvisé",
		images: [
			{
				url: "/og/tcc-cover.jpg",
				width: 1200,
				height: 630,
				alt: "Très chair corps",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Très chair corps",
		description: "Très chair corps - seule en scène improvisé",
		images: ["/og/tcc-cover.jpg"],
	},
};


type RootLayoutProps = {
	children: React.ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
	const { children } = props;

	return <html lang="fr">
		<body>
			<BurgerMenu />
			{children}
		</body>
	</html>
};

export default RootLayout;