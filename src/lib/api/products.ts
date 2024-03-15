import { executeGraphql } from "@/app/(core)/_utils/gql";
import {
	type ProductsGetQuery,
	ProductsGetDocument,
	type ProductItemFragment,
	type ProductGetByIdQuery,
	ProductGetByIdDocument,
} from "@/gql/graphql";

// GraphQL API (Alternative)

export const getProducts = async ({
	skip = 0,
	limit = 10,
	searchQuery,
}: {
	skip?: number;
	limit?: number;
	searchQuery?: string;
}) => {
	const gqlResponse: ProductsGetQuery = await executeGraphql({
		query: ProductsGetDocument,
		variables: {
			take: limit,
			skip,
			search: searchQuery,
		},
	});

	return gqlResponse.products;
};

export const getProductById = async (id: ProductItemFragment["id"]) => {
	const gqlResponse: ProductGetByIdQuery = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id },
	});

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
