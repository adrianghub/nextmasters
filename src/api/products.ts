import { type ProductItem, type ProductResponseItem } from "@/models/product";

export const getProducts = async (): Promise<ProductItem[]> => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");

	const productsResponse = (await res.json()) as ProductResponseItem[];

	return productsResponse.map(productResponseToProduct);
};

export const getProductById = async (id: ProductResponseItem["id"]): Promise<ProductItem> => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

	const productResponse = (await res.json()) as ProductResponseItem;

	return productResponseToProduct(productResponse);
};

const productResponseToProduct = (productResponse: ProductResponseItem): ProductItem => ({
	id: productResponse.id,
	name: productResponse.title,
	price: productResponse.price,
	coverImage: {
		src: productResponse.image,
		alt: productResponse.title,
	},
	category: productResponse.category,
});
