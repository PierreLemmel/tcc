import type { Metadata } from "next";
import "./globals.css";
import BurgerMenu from "@/components/burger-menu";

export const metadata: Metadata = {
	title: "Très chair corps",
	description: "Très chair corps - seule-en-scène improvisé",
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