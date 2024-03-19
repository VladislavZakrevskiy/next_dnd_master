'use client'
import React, { FC, useState } from 'react'
import { useLocale } from 'next-intl'
import ISO6391 from 'iso-639-1'
import { locales, usePathname, useRouter } from '@/navigation'
import { Button } from '@nextui-org/react'
import { useSearchParams } from 'next/navigation'

export const LanguageSwitcher: FC = () => {
    const searchParams = useSearchParams()
    const locale = useLocale()
    const router = useRouter()
    const pathName = usePathname()

    const handleChange = () => {
        router.replace(`${pathName}?${searchParams.toString()}`, { locale: locale === 'ru' ? 'en' : 'ru' })
    }

    return <Button onClick={handleChange}>{ISO6391.getNativeName(locale)}</Button>
}
