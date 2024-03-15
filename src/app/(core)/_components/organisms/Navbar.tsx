import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ActiveLink } from "../atoms/ActiveLink";
import { getCartFromCookies } from "@/lib/api/cart";
import { ProductSearchInput } from "@/app/(products)/_components/molecules/ProductSearchInput";

export const Navbar = async () => {
	const cart = await getCartFromCookies();
	const productsQuantity = cart?.items.length ?? 0;

	return (
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
						<SignedIn>
							<li className="flex h-full items-center">
								<ActiveLink href="/orders" className="flex items-center">
									Orders
								</ActiveLink>
							</li>
						</SignedIn>
					</ul>
					<div className="flex items-center gap-2">
						<ProductSearchInput />

						<Link href="/cart" className="flex items-center gap-1 hover:text-blue-600">
							<span className="ml-2 text-sm font-medium">{productsQuantity}</span>
							<span className="sr-only">items in cart, view cart</span>

							<ShoppingBag />
						</Link>
						<SignedIn>
							<UserButton />
						</SignedIn>
						<SignedOut>
							<SignInButton>Login</SignInButton>
						</SignedOut>
					</div>
				</div>
			</div>
		</nav>
	);
};
