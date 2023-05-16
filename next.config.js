/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ico|png|svg)$/,
      loader: 'file-loader',
      options: {
        publicPath: '/_next',
        name: 'static/media/[name].[hash].[ext]',
      },
    })

    return config
  },
}
