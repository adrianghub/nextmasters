import { type Metadata } from "next";
import Link from "next/link";
import { ProductCoverImage } from "@/app/(products)/_components/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/app/(products)/_components/atoms/ProductItemDescription";
import { type ProductItem as ProductItemType } from "@/models/product";
import { getProductById } from "@/lib/api/products";

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
					<h3 className="mt-4 text-sm font-semibold">{product.name}</h3>
					<div className="flex justify-between">
						<ProductItemDescription {...product} />
					</div>
				</article>
			</Link>
		</li>
	);
};
