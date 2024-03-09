import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.GRAPHQL_PRODUCTS_URL,
	documents: "src/graphql/**/*.graphql",
	ignoreNoDocuments: true,
	generates: {
		"src/gql/": {
			preset: "client",
			config: {
				useTypeImports: true,
				defaultScalarType: "unknown",
				skipTypename: true,
				enumsAsTypes: true,
				documentMode: "string",
			},
			plugins: [],
		},
	},
};

export default config;
