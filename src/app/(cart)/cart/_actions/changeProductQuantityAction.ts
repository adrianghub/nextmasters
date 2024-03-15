"use server";

import { revalidateTag } from "next/cache";
import { changeCartItemQuantity } from "@/lib/api/cart";

export const changeProductQuantityAction = async (productId: string, quantity: number) => {
	await changeCartItemQuantity(productId, quantity);

	revalidateTag("cart");
};
