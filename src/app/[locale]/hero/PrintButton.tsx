import { GPTDescription } from '@/entities/Hero'
import { Link, redirect } from '@/navigation'
import { Button } from '@nextui-org/react'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

export const PrintButton = ({ gptRes }: { gptRes: GPTDescription }) => {
    const t = useTranslations('hero')

    return (
        <Button color="primary" type="submit">
            {t('print it')}
        </Button>
    )
}
