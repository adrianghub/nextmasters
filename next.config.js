/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
};

const withMDX = require("@next/mdx");
module.exports = withMDX(nextConfig);
