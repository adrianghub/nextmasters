import { type TypedDocumentString } from "@/gql/graphql";

export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

type Params<TResult, TVariables> = {
	query: TypedDocumentString<TResult, TVariables>;
	cache?: RequestCache;
	next?: NextFetchRequestConfig | undefined;
	headers?: HeadersInit;
} & (TVariables extends { [key: string]: never }
	? { variables?: never }
	: { variables: TVariables });

export const executeGraphql = async <TResult, TVariables>({
	query,
	variables,
	cache,
	next,
	headers,
}: Params<TResult, TVariables>): Promise<TResult> => {
	if (!process.env.GRAPHQL_PRODUCTS_URL) {
		throw TypeError("GRAPHQL_PRODUCTS_URL is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_PRODUCTS_URL!, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		cache,
		next,
		headers: {
			...headers,
			"Content-Type": "application/json",
		},
	});

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};
