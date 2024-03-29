import { auth } from '@/app/[locale]/auth'
import { Avatar } from '@nextui-org/avatar'
import Image from 'next/image'
import Link from 'next/link'
import { SignIn, SignOut } from '@/entities/Auth'
import Icon from '@/app/[locale]/icon.ico'
import { LanguageSwitcher } from '@/entities/Switchers'

export const Header = async () => {
    const sessionData = await auth()

    return (
        <header className="flex justify-between items-center py-4 px-6  text-white">
            <Link href="/" className="flex justify-center items-center gap-4">
                <Image src={Icon} alt="Your Logo" width={45} />
                <p className="text-black text-xl font-bold">DND Master</p>
            </Link>
            {sessionData ? (
                <div className="flex justify-center items-center gap-4">
                    <LanguageSwitcher />
                    <Avatar
                        size="lg"
                        src={sessionData.user?.image || undefined}
                        name={sessionData.user?.name || 'You'}
                    />
                    <SignOut />
                </div>
            ) : (
                <SignIn />
            )}
        </header>
    )
}
