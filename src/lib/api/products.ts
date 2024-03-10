import { executeGraphql } from "@/app/(core)/_utils/gql";
import {
	ProductGetByIdDocument,
	type ProductGetByIdQuery,
	ProductsGetDocument,
	type ProductsGetQuery,
	type ProductItemFragment,
} from "@/gql/graphql";

// GraphQL API (Alternative)

export const getProducts = async ({ skip = 0, limit = 10 }: { skip?: number; limit?: number }) => {
	const gqlResponse: ProductsGetQuery = await executeGraphql(ProductsGetDocument, {
		take: limit,
		skip,
	});

	return gqlResponse.products.data;
};

export const getProductById = async (id: ProductItemFragment["id"]) => {
	const gqlResponse: ProductGetByIdQuery = await executeGraphql(ProductGetByIdDocument, { id });

	return gqlResponse.product;
};

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

// export const getProductsTotal = async (): Promise<number> => {
// const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=9999`);

// const productsResponse = (await res.json()) as ProductResponseItem[];

// return productsResponse.length;

// 	return 1000;
// };

// export const getProductById = async (id: ProductResponseItem["id"]): Promise<ProductItem> => {
// 	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

// 	const productResponse = (await res.json()) as ProductResponseItem;

// 	return productResponseToProduct(productResponse);
// };

// const productResponseToProduct = (productResponse: ProductResponseItem): ProductItem => ({
// 	id: productResponse.id,
// 	name: productResponse.title,
// 	description: productResponse.description,
// 	price: productResponse.price,
// 	coverImage: {
// 		src: productResponse.image,
// 		alt: productResponse.title,
// 	},
// 	category: productResponse.category,
// });
