import { signIn } from '@/app/auth'
import { Button } from '@nextui-org/button'

export function SignIn() {
    return (
        <form
            action={async () => {
                'use server'
                await signIn()
            }}
        >
            <Button variant="ghost" color="primary" type="submit">
                Sign In
            </Button>
        </form>
    )
}
