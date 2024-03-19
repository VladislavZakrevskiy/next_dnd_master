import React, { ChangeEvent, useState } from 'react'
import { OpenAI } from '../../../shared/lib/OpenAI/OpenAi'
import { createPrompt, createPromptProps } from '@/entities/Hero/model/lib/createPrompt'
import { GPTDescription, HeroAvatar, HeroExtraDesc, HeroMainDes } from '@/entities/Hero'
import { PrintButton } from './PrintButton'
import { RefreshButton } from './RefreshButton'
import { clamp } from '@/shared/lib/Math/minimax'
import { getTranslations } from 'next-intl/server'
import { redirect } from '@/navigation'

export const maxDuration = 10

const HeroPage = async ({ searchParams }: { searchParams: { options: string } }) => {
    const t = await getTranslations('hero')
    const OpenAiAPI = new OpenAI()
    const options: createPromptProps = JSON.parse(searchParams.options || '')
    let textData = await OpenAiAPI.generateText(createPrompt(options))
    console.log(textData)
    if (textData?.startsWith('```json')) {
        textData = textData.substring(7, textData.length - 4)
    }
    const gptRes: GPTDescription = JSON.parse(textData || '')

    return (
        <form
            className="flex flex-col gap-4"
            action={async (form) => {
                'use server'
                let data: GPTDescription = {
                    ...gptRes,
                }

                form.forEach((value, key) => {
                    if (key.startsWith('skills') || key.startsWith('item')) {
                        const address = key.toString().split('-')
                        const host = address[0] as 'skills' | 'item'
                        const char = address[1]
                        const id = Number(address[2])
                        //@ts-ignore
                        data[host][id][char] = value
                    } else if (key.startsWith('item')) {
                    } else if (key.startsWith('competency')) {
                        const address = key.toString().split('-')
                        const char = address[1]
                        //@ts-ignore
                        data.competency[char] = value
                    } else if (
                        ['strength', 'agility', 'endurance', 'intelligence', 'wisdom', 'charisma'].includes(key)
                    ) {
                        //@ts-ignore
                        data.characterictics[key] = value
                    } else {
                        // @ts-ignore
                        data[key] = value.toString()
                    }
                })
                redirect(`/dndcard?options=${encodeURIComponent(JSON.stringify(data))}`)
            }}
        >
            <h1 className="font-bold text-4xl text-center">{t('editor')}</h1>
            <div className="flex justify-between">
                <RefreshButton options={options} />
                <PrintButton gptRes={gptRes} />
            </div>
            <HeroMainDes gptDescription={gptRes} />
            <HeroExtraDesc gptDescription={gptRes} />
        </form>
    )
}

/* <div className="grid grid-cols-2 grid-rows-1 justify-center items-center"> 
<div className="flex justify-center items-center">
    <HeroAvatar
        num={options.numberimgs}
        openAi={OpenAiAPI}
        gptResponse={gptRes}
        heroName={gptRes.name}
    />
</div> */

export default HeroPage
