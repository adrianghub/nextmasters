import { type Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { revalidateTag } from "next/cache";
import AddToCartButton from "../../_components/atoms/AddToCartButton";
import { ProductCoverImage } from "../../_components/atoms/ProductCoverImage";
import { RelatedProductsList } from "../../_components/organisms/RelatedProductsList";
import { ReviewsList } from "../../_components/organisms/ReviewsList";
import { formatCurrency } from "@/app/(core)/_utils/common";
import { getProductById } from "@/lib/api/products";
import { addProductToCart, getOrCreateCart } from "@/lib/api/cart";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: `${product?.name} | Storefront`,
		description: product?.description,
		openGraph: {
			title: `${product?.name} | Storefront`,
			description: product?.description,
			images: product?.images[0]?.url,
		},
	};
};

const SingleProductPage = async ({ params }: { params: { productId: string } }) => {
	const product = await getProductById(params.productId);

	if (!product) {
		return notFound();
	}

	async function addToCartAction() {
		"use server";

		const cart = await getOrCreateCart();

		if (!cart) {
			return;
		}

		await addProductToCart(cart.id, params.productId);

		revalidateTag("cart");
	}

	return (
		<>
			<div className="mx-auto mb-12 mt-6 flex flex-col gap-4 md:flex-row">
				<ProductCoverImage {...product.images[0]} />

				<div className="mt-2 flex justify-between gap-4 md:flex-col md:justify-start">
					<h1 className="text-[1.5rem] font-semibold text-gray-700 lg:text-[3rem]">
						{product.name}
					</h1>

					<div className="flex gap-4 md:flex-col">
						<div>
							<p className="text-sm text-gray-500 lg:text-xl">
								<span className="sr-only">Category:</span> {product.categories[0]?.name}
							</p>
							<p className="text-sm font-bold text-gray-900 lg:text-xl">
								<span className="sr-only">Price:</span> {formatCurrency(product.price / 100)}
							</p>
						</div>

						<form action={addToCartAction}>
							<AddToCartButton />
						</form>
					</div>
				</div>
			</div>

			<aside>
				<Suspense fallback={<p>Loading...</p>}>
					<RelatedProductsList />
				</Suspense>

				<Suspense>
					<ReviewsList productId={product.id} />
				</Suspense>
			</aside>
		</>
	);
};

export default SingleProductPage;
