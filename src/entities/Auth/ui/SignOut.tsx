import { signOut } from '@/app/auth'
import { Button } from '@nextui-org/button'

export function SignOut() {
    return (
        <form
            action={async () => {
                'use server'
                await signOut()
            }}
        >
            <Button variant="ghost" color="primary" type="submit">
                Sign Out
            </Button>
        </form>
    )
}
