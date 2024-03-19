import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'oaidalleapiprodscus.blob.core.windows.net',
            },
            { hostname: 'i.pinimg.com' },
        ],
    },
    experimental: {
        serverComponentsExternalPackages: ['react-dom/server'],
    },
}

export default withNextIntl(nextConfig)
