'use client'
import { GPTDescription } from '@/entities/Hero'
import { PrintButton } from './PrintButton'
import { Select, SelectItem, Selection } from '@nextui-org/react'
import { useState } from 'react'
import { MainDesc, SkillsItemsDesc } from './ContentDNDCard'
const DNDCard = ({ searchParams: { options } }: { searchParams: { options: string } }) => {
    const gptRes: GPTDescription = JSON.parse(options)
    return (
        <div>
            <div className="flex flex-col gap-4">
                <MainDesc options={gptRes} />
                <SkillsItemsDesc options={gptRes} />
            </div>
            <div className="flex flex-col gap-2 m-4">
                <PrintButton gptRes={gptRes} />
            </div>
        </div>
    )
}

export default DNDCard
