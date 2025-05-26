// import { loadRemoteCollection } from "@monicon/loader";
// import { MoniconPlugin } from "@monicon/webpack";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	devIndicators: {
		position: "bottom-right",
	},

	// webpack: (config: { plugins: unknown[] }) => {
	// 	config.plugins.push(
	// 		new MoniconPlugin({
	// 			customCollections: {
	// 				"material-symbols": loadRemoteCollection({
	// 					"arrow-outward-rounded":
	// 						"https://api.iconify.design/material-symbols:arrow-outward-rounded.svg",
	// 				}),
	// 			},
	// 		})
	// 	);

	// 	return config;
	// },

	eslint: {
		ignoreDuringBuilds: true,
	},

	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
