import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { ReactNode } from "react";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Todos",
	description: "Create your todos for today",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
