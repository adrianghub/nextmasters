import { type Product } from "@/models/product";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";

export const ProductItem = (product: Product) => {
	return (
		<li>
			<article>
				<ProductCoverImage {...product.coverImage} />
				<ProductItemDescription {...product} />
			</article>
		</li>
	);
};
