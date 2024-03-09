/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { executeGraphql } from "@/app/(core)/_utils/gql";
import { ProductsGetDocument, type ProductsGetQuery } from "@/gql/graphql";
import { type ProductItem, type ProductResponseItem } from "@/models/product";

// REST API

// export const getProducts = async ({
// 	page,
// 	limit = 20,
// }: {
// 	page?: number;
// 	limit?: number;
// }): Promise<ProductItem[]> => {
// 	const res = await fetch(
// 		`https://naszsklep-api.vercel.app/api/products?take=${limit}&offset=${page ?? 0}`,
// 	);

// 	const productsResponse = (await res.json()) as ProductResponseItem[];

// 	return productsResponse.map(productResponseToProduct);
// };

export const getProductsTotal = async (): Promise<number> => {
	// const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=9999`);

	// const productsResponse = (await res.json()) as ProductResponseItem[];

	// return productsResponse.length;

	return 1000;
};

export const getProductById = async (id: ProductResponseItem["id"]): Promise<ProductItem> => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

	const productResponse = (await res.json()) as ProductResponseItem;

	return productResponseToProduct(productResponse);
};

const productResponseToProduct = (productResponse: ProductResponseItem): ProductItem => ({
	id: productResponse.id,
	name: productResponse.title,
	description: productResponse.description,
	price: productResponse.price,
	coverImage: {
		src: productResponse.image,
		alt: productResponse.title,
	},
	category: productResponse.category,
});

// GraphQL API (Alternative)

export const getProducts = async (): Promise<ProductItem[]> => {
	const gqlResponse: ProductsGetQuery = await executeGraphql(ProductsGetDocument);

	return gqlResponse.products.data.map((product) => ({
		id: product.id,
		name: product.name,
		description: product.description,
		price: product.price,
		coverImage: {
			src: product.images[0]?.url || "",
			alt: product.name,
		},
		category: product.categories[0]?.name || "",
	}));
};
