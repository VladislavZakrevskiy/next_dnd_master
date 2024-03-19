'use client'
import { Button } from '@nextui-org/button'
import { GPTDescription } from '@/entities/Hero'
import { MainDesc, SkillsItemsDesc } from './ContentDNDCard'
import { NextIntlClientProvider, useLocale } from 'next-intl'

export const PrintButton = ({ gptRes }: { gptRes: GPTDescription }) => {
    const locale = useLocale()

    const handlePrint = async () => {
        const html2pdf = (await import('html2pdf.js/dist/html2pdf.min.js')).default
        const ReactDOMServer = (await import('react-dom/server')).default
        let messages
        try {
            messages = (await import(`../../../../messages/${locale}.json`)).default
        } catch (error) {
            console.log(error)
        }
        const content = (
            <NextIntlClientProvider locale={locale} messages={messages}>
                <MainDesc options={gptRes} />
                <div style={{ margin: 300 }}></div>
                <SkillsItemsDesc options={gptRes} type={'flex'} />
            </NextIntlClientProvider>
        )
        const printContent = ReactDOMServer.renderToString(content)
        html2pdf()
            .set({
                filename: `${gptRes.name}-${(Math.random() * 10).toFixed(6)}`,
                margin: 2,
                image: { type: 'jpeg', quality: 0.95 },
                jsPDF: { format: 'letter', orientation: 'landscape' },
                html2canvas: { scele: 75 },
            })
            .from(printContent)
            .save()
    }

    return (
        <Button fullWidth color="primary" onClick={handlePrint}>
            Print it!
        </Button>
    )
}
