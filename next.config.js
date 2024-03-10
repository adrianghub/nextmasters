const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static-ourstore.hyperfunctor.com",
			},
		],
	},
};

module.exports = withMDX(nextConfig);
