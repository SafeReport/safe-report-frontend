import type { NextConfig } from "next";

const nextConfig = {
	devIndicators: {
		position: "bottom-right",
	},

	eslint: {
		ignoreDuringBuilds: true,
	},

	typescript: {
		ignoreBuildErrors: true,
	},
} satisfies NextConfig;

export default nextConfig;
