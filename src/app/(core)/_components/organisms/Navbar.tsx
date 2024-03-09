import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { ActiveLink } from "../atoms/ActiveLink";

export const Navbar = () => (
	<nav className="sticky top-0 bg-white/80 backdrop-blur-md">
		<div className="mx-auto h-[72px] max-w-6xl px-4">
			<div className="flex h-full items-center justify-between">
				<div className="flex-shrink-0">
					<Link href="/">Logo</Link>
				</div>
				<ul className="flex h-full items-center space-x-4">
					<li className="flex h-full items-center">
						<ActiveLink href="/" exact className="flex items-center">
							Home
						</ActiveLink>
					</li>
					<li className="flex h-full items-center">
						<ActiveLink href="/products" className="flex items-center">
							Products
						</ActiveLink>
					</li>
				</ul>
				<div>
					<button type="button" className="hover:text-blue-600">
						<ShoppingBag />
					</button>
				</div>
			</div>
		</div>
	</nav>
);
