import React from 'react'
import { OpenAI } from '../../shared/lib/OpenAI/OpenAi'
import { createPrompt, createPromptProps } from '@/entities/Hero/model/lib/createPrompt'
import { useRouter } from 'next/navigation'
import { GPTDescription } from '@/entities/Hero/model/types/gptDescription'
import { HeroAvatar, HeroExtraDesc, HeroMainDes } from '@/entities/Hero'

const HeroPage = async ({ searchParams }: { searchParams: { options: string } }) => {
    const OpenAiAPI = new OpenAI()
    const options: createPromptProps = JSON.parse(searchParams.options || '')
    let textData = await OpenAiAPI.generateText(createPrompt(options))
    console.log(textData)
    if (textData?.startsWith('```json')) {
        textData = textData.substring(7, textData.length - 4)
    }
    const gptRes: GPTDescription = JSON.parse(textData || '')
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 grid-rows-1 justify-center items-center">
                <div className="flex justify-center items-center">
                    {/* <HeroAvatar
                        num={options.numberimgs}
                        openAi={OpenAiAPI}
                        gptResponse={gptRes}
                        heroName={gptRes.name}
                    /> */}
                </div>
                <HeroMainDes gptDescription={gptRes} />
            </div>
            <HeroExtraDesc gptDescription={gptRes} />
        </div>
    )
}

export default HeroPage
