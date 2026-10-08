import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Cosmo — Systems for what's next",
	description: "Daniel Cosmo's independent technology company.",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
