import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/components/ui/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/components/ui/atoms/ProductItemDescription";
import { RelatedProductsList } from "@/components/ui/organisms/RelatedProductsList";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: `${product.name} | Storefront`,
		description: product.description,
		openGraph: {
			title: `${product.name} | Storefront`,
			description: product.description,
			images: [product.coverImage.src],
		},
	};
};

const SingleProductPage = async ({ params }: { params: { productId: string } }) => {
	const product = await getProductById(params.productId);

	return (
		<>
			<article className="max-w-xs">
				<ProductCoverImage {...product.coverImage} />
				<ProductItemDescription {...product} />
			</article>

			<aside>
				<Suspense fallback={<p>Loading...</p>}>
					<RelatedProductsList />
				</Suspense>
			</aside>
		</>
	);
};

export default SingleProductPage;
