import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ActiveLink } from "@/components/ui/atoms/ActiveLink";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Storefront",
	description: "Storefront is a demo e-commerce site built with Next.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav>
					<ul className="flex justify-center space-x-4 py-4">
						<li>
							<ActiveLink href="/" exact>
								Home
							</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/products">Products</ActiveLink>
						</li>
					</ul>
				</nav>
				<main className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</main>

				<footer className="text-center text-sm text-gray-500">© 2023</footer>
			</body>
		</html>
	);
}
