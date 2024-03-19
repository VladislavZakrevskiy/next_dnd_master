import { signIn } from '@/app/[locale]/auth'
import { Button } from '@nextui-org/button'
import { useTranslations } from 'next-intl'

export function SignIn() {
    const t = useTranslations('auth')

    return (
        <form
            action={async () => {
                'use server'
                await signIn()
            }}
        >
            <Button variant="ghost" color="primary" type="submit">
                {t('sign in')}
            </Button>
        </form>
    )
}
