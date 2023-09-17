import Link from "next/link";
import { type ProductItem as ProductItemType } from "@/models/product";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";

export const ProductItem = (product: ProductItemType) => {
	return (
		<li>
			<Link href={`products/${product.id}`}>
				<article>
					<ProductCoverImage {...product.coverImage} />
					<ProductItemDescription {...product} />
				</article>
			</Link>
		</li>
	);
};
