"use server";

import { removeProductFromCart } from "@/lib/api/cart";

export async function removeProductAction(id: string) {
	await removeProductFromCart(id);
}
