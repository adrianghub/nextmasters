import { ProductItem } from "../molecules/ProductItem";
import { type ProductItem as ProductItemType } from "@/models/product";

interface ProductsListProps {
	products: ProductItemType[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
	return (
		<ul
			className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductItem key={product.id} {...product} />
			))}
		</ul>
	);
};
