'use client'
import { createPromptProps } from '@/entities/Hero/model/lib/createPrompt'
import { useRouter } from '@/navigation'
import { Button } from '@nextui-org/button'
import { useTranslations } from 'next-intl'
import { revalidatePath } from 'next/cache'

export const RefreshButton = ({ options }: { options: createPromptProps }) => {
    const t = useTranslations('hero')
    const router = useRouter()
    const onRefresh = () => {
        router.refresh()
    }

    return (
        <Button color="primary" onClick={onRefresh}>
            {t('refresh')}
        </Button>
    )
}
