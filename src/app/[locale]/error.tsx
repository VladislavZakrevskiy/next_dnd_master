'use client'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

const Error = () => {
    const t = useTranslations('help')
    return (
        <div className="flex justify-center items-center">
            <p>{t('error')}</p>
            <p>{t('sorry')}</p>
            <Link href={'/'}>{t('to home')}</Link>
        </div>
    )
}

export default Error
