import { ProductsList } from "./ProductsList";
import { getProducts } from "@/api/products";
import { type ProductItem } from "@/models/product";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const RelatedProductsList = async () => {
	const products: ProductItem[] = await getProducts();

	await sleep(1000);

	return <ProductsList products={products.slice(-4)} />;
};
