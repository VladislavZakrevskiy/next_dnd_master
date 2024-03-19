import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
})

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ru|en)/:path*'],
}
