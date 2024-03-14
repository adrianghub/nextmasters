import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { getCartFromCookies } from "@/lib/api/cart";
import { executeGraphql } from "@/app/(core)/_utils/gql";
import { CartCompleteDocument } from "@/gql/graphql";

export const handlePaymentAction = async (userEmail: string) => {
	"use server";

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("STRIPE_SECRET_KEY is not defined");
	}

	const cart = await getCartFromCookies();

	if (!cart) {
		throw new Error("Cart is not defined");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card", "blik", "p24"],
		metadata: {
			cartId: cart.cartFindOrCreate.id,
		},
		line_items: cart.cartFindOrCreate.items.map((item) => ({
			price_data: {
				currency: "pln",
				product_data: {
					name: item.product.name,
				},
				unit_amount: item.product.price,
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		success_url: "http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}",
		cancel_url: "http://localhost:3000/cart/cancel?session_id={CHECKOUT_SESSION_ID}",
	});

	if (!checkoutSession.url) {
		throw new Error("checkoutSession.url is not defined");
	}

	const cartComplete = await executeGraphql({
		query: CartCompleteDocument,
		variables: {
			cartId: cart.cartFindOrCreate.id,
			userEmail,
		},
	});

	console.log(cartComplete);

	cookies().set("cartId", "", { expires: new Date(0) });

	redirect(checkoutSession.url);
};
