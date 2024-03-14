import { cookies } from "next/headers";
import {
	CartAddItemDocument,
	CartFindOrCreateDocument,
	CartRemoveItemDocument,
} from "./../../gql/graphql";
import { getProductById } from "./products";
import { executeGraphql } from "@/app/(core)/_utils/gql";

export async function getOrCreateCart() {
	try {
		const cart = await getCartFromCookies();

		if (cart) {
			return cart;
		}

		const newCart = await executeGraphql({
			query: CartFindOrCreateDocument,
			variables: {},
			cache: "no-store",
		});
		if (!newCart) {
			throw new Error("Failed to create cart");
		}

		cookies().set("cartId", newCart.cartFindOrCreate.id, {
			httpOnly: true,
			sameSite: "lax",
			secure: process.env.NODE_ENV === "production",
		});

		return newCart;
	} catch (error) {
		console.error("Failed to get or create cart", error);
	}
}

export async function getCartById(id: string) {
	const cart = await executeGraphql({
		query: CartFindOrCreateDocument,
		variables: {
			id,
		},
		next: {
			tags: ["cart"],
		},
		cache: "no-store",
	});

	if (!cart) {
		throw new Error("Cart not found");
	}

	return cart;
}

export async function addProductToCart(id: string, productId: string) {
	try {
		const product = await getProductById(productId);

		if (!product) {
			throw new Error("Product not found");
		}

		await executeGraphql({
			query: CartAddItemDocument,
			variables: {
				id,
				input: {
					item: {
						productId: product.id,
					},
				},
			},
			cache: "no-store",
		});
	} catch (error) {
		console.error("Failed to add product to cart", error);
	}
}

export async function removeProductFromCart(productId: string) {
	const cart = await getCartFromCookies();

	if (!cart) {
		return;
	}

	try {
		await executeGraphql({
			query: CartRemoveItemDocument,
			variables: {
				id: cart.cartFindOrCreate.id,
				productId,
			},
			cache: "no-store",
		});
	} catch (error) {
		console.error("Failed to remove product from cart", error);
	}
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;

	try {
		if (cartId) {
			const cart = await getCartById(cartId);

			if (cart) {
				return cart;
			}
		}
	} catch (error) {
		console.error("Failed to get cart from cookies", error);
	}
}
