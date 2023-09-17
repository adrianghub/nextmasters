import { getProducts } from "@/api/products";
import { type ProductItem } from "@/models/product";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function ProductsPage() {
	const products: ProductItem[] = await getProducts();

	return <ProductsList products={products} />;
}
