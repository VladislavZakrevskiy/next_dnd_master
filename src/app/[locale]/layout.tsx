import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { NextUI } from '@/global/providers/NextUI'
import localFont from 'next/font/local'
import { Header } from '@/widgets/Header'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

const mookMania = localFont({
    src: '../../../public/fonts/Mookmania.woff',
    display: 'swap',
    variable: '--font-mookmania',
})
const roboto = Roboto({
    weight: ['400', '700'],
    display: 'swap',
    subsets: ['cyrillic', 'latin'],
    variable: '--font-roboto',
})

export const metadata: Metadata = {
    title: 'DND VZ',
    description: 'Super cool service for cool dnd players',
}

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    let messages
    try {
        messages = (await import(`../../../messages/${locale}.json`)).default
    } catch (error) {
        notFound()
    }

    return (
        <html lang={locale}>
            <body className={`${roboto.variable} ${mookMania.variable}`}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <NextUI>
                        <Header />
                        <main className="m-8">{children}</main>
                    </NextUI>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
