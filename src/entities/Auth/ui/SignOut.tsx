import { signOut } from '@/app/[locale]/auth'
import { Button } from '@nextui-org/button'
import { useTranslations } from 'next-intl'

export function SignOut() {
    const t = useTranslations('auth')
    return (
        <form
            action={async () => {
                'use server'
                await signOut()
            }}
        >
            <Button variant="ghost" color="primary" type="submit">
                {t('sign out')}
            </Button>
        </form>
    )
}
