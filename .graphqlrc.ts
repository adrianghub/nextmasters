import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.GRAPHQL_URL,
	documents: "src/graphql/*.graphql",
	ignoreNoDocuments: true,
	generates: {
		"src/gql/": {
			preset: "client",
			presetConfig: {},
			plugins: [],
			config: {
				documentMode: "string",
				defaultScalarType: "unknown",
				useTypeImports: true,
				skipTypename: true,
				enumsAsTypes: true,
			},
		},
	},
};

export default config;
