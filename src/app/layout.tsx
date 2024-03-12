import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "./(core)/_utils/styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Storefront",
	description: "Storefront is a demo e-commerce site built with Next.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="min-h-full">
			<body className={cn(inter.className, "h-full")}>
				{/* <Navbar /> */}

				<main className="mx-auto min-h-full max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</main>

				<footer className="py-4 text-center text-sm text-gray-500">
					© {new Date().getFullYear()}
				</footer>
			</body>
		</html>
	);
}
