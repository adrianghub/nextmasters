import { ProductsList } from "./ProductsList";
import { getProducts } from "@/lib/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const RelatedProductsList = async () => {
	const { data: products } = await getProducts({
		limit: 4,
	});

	await sleep(1000);

	return <ProductsList products={products} data-testid="related-products" />;
};
