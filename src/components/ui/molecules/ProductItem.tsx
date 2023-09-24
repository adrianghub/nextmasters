import Link from "next/link";
import { type Metadata } from "next";
import { type ProductItem as ProductItemType } from "@/models/product";
import { ProductCoverImage } from "@/components/ui/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/components/ui/atoms/ProductItemDescription";
import { getProductById } from "@/api/products";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const { productId } = params;
	const product = await getProductById(productId);

	return {
		title: `${product.name} | Storefront`,
		description: product.category,
	};
};

export const ProductItem = (product: ProductItemType) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage {...product.coverImage} />
					<ProductItemDescription {...product} />
				</article>
			</Link>
		</li>
	);
};
