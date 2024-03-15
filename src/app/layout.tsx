import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Header } from '../widgets/Header'
import { NextUI } from '@/global/providers/NextUI'

const roboto = Roboto({ weight: ['400', '700'], display: 'swap', subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
    title: 'DND VZ',
    description: 'Super cool service for cool dnd players',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <NextUI>
                    <Header />
                    <main className="m-8">{children}</main>
                </NextUI>
            </body>
        </html>
    )
}
