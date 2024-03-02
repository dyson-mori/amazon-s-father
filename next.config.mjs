/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'paidaamazon.com.br',
				port: '',
				pathname: '/wp-content/uploads/**',
			},
		],
	},
};

export default nextConfig;
