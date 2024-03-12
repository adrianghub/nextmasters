import { type Metadata } from "next";
import Link from "next/link";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductItemDescription } from "../atoms/ProductItemDescription";
import { getProductById } from "@/lib/api/products";
import { type ProductItemFragment } from "@/gql/graphql";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const { productId } = params;
	const product = await getProductById(productId);

	return {
		title: `${product?.name} | Storefront`,
		description: product?.categories[0]?.name,
	};
};

export const ProductItem = (product: ProductItemFragment) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					{product.images[0] && <ProductCoverImage {...product.images[0]} />}
					<h3 className="mt-4 text-sm font-semibold">{product.name}</h3>
					<div className="flex justify-between">
						<ProductItemDescription {...product} />
					</div>
				</article>
			</Link>
		</li>
	);
};
