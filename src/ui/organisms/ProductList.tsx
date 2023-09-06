import { type Product } from "@/models/product";
import { ProductItem } from "@/ui/molecules/ProductItem";

interface ProductListProps {
	products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductItem key={product.id} {...product} />
			))}
		</ul>
	);
};
