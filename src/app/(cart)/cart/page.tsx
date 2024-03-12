import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import { ProductQuantity } from "./_components/molecules/ProductQuantity";
import RemoveProductButton from "./_components/atoms/RemoveProductButton";
import { formatCurrency } from "@/app/(core)/_utils/common";
import { getCartById } from "@/lib/api/cart";

const CartPage = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const { cartFindOrCreate: cart } = await getCartById(cartId);

	if (!cart) {
		redirect("/");
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
								<td>{formatCurrency(item.product.price / 100)}</td>
								<td>
									<RemoveProductButton productId={item.product.id} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default CartPage;
