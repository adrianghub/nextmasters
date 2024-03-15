import { redirect } from "next/navigation";
import React from "react";
import { SignInButton, SignedIn, SignedOut, currentUser } from "@clerk/nextjs";
import { ProductQuantity } from "./_components/molecules/ProductQuantity";
import RemoveProductButton from "./_components/atoms/RemoveProductButton";
import { handlePaymentAction } from "./_actions/handlePaymentAction";
import { formatCurrency } from "@/app/(core)/_utils/common";
import { getCartFromCookies } from "@/lib/api/cart";
import { Button } from "@/lib/ui/button";

const CartPage = async () => {
	const cart = await getCartFromCookies();

	if (!cart) {
		redirect("/");
	}

	const user = await currentUser();
	let userEmail = "";

	if (user) {
		userEmail =
			user?.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)?.emailAddress ||
			"";
	}

	return (
		<div>
			<h1>Order #{cart.id} summary</h1>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.items.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr key={item.product.id}>
								<td>{item.product.name}</td>
								<td>
									<ProductQuantity quantity={item.quantity} productId={item.product.id} />
								</td>
								<td>{formatCurrency((item.product.price / 100) * item.quantity)}</td>
								<td>
									<RemoveProductButton productId={item.product.id} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<SignedIn>
				<form
					action={async () => {
						"use server";

						return handlePaymentAction(userEmail);
					}}
				>
					<Button type="submit" disabled={!cart.items.length}>
						Make an order
					</Button>
				</form>
			</SignedIn>
			<SignedOut>
				<SignInButton>Sign in to make an order</SignInButton>
			</SignedOut>
		</div>
	);
};

export default CartPage;
