import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'
const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['var(--font-roboto)'],
                mookmania: ['var(--font-mookmania)'],
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
}
export default config
