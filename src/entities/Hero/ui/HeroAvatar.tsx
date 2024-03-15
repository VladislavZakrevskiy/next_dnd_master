import { OpenAI } from '@/shared/lib/OpenAI/OpenAi'
import Image from 'next/image'
import React, { FC } from 'react'
import { GPTDescription } from '../model/types/gptDescription'

interface HeroAvatarProps {
    heroName?: string
    openAi: OpenAI
    gptResponse: GPTDescription
    num: number
}

export const HeroAvatar: FC<HeroAvatarProps> = async ({ heroName, gptResponse, openAi, num }) => {
    const imageData = await openAi.generateImage(gptResponse.promptDALLE3, num)
    const imageSrcLength = imageData?.length

    if (!!imageData) {
        return <p>{`Sorry, it's rate limit Open AI, i cant do anything with it(`}</p>
    }
    if (imageSrcLength === 0) {
        return <p>{`Sorry, it's rate limit Open AI, i cant do anything with it(`}</p>
    }
    if (imageSrcLength === 1) {
        return <Image width={500} height={500} src={imageData![0].url!} alt={heroName + '1'} />
    }
    if (imageSrcLength === 2) {
        return (
            <div className="flex">
                <Image width={350} height={350} src={imageData![0].url!} alt={heroName + '1'} />
                <Image width={350} height={350} src={imageData![1].url!} alt={heroName + '2'} />
            </div>
        )
    }
    if (imageSrcLength === 3) {
        return (
            <div className="flex w-[500px] flex-wrap justify-center items-center">
                <Image width={250} height={250} src={imageData![0].url!} alt={heroName + '1'} />
                <Image width={250} height={250} src={imageData![1].url!} alt={heroName + '2'} />
                <Image width={250} height={250} src={imageData![2].url!} alt={heroName + '3'} />
            </div>
        )
    }
    if (imageSrcLength === 4) {
        return (
            <div className="grid grid-cols-2 grid-rows-2 ">
                <Image width={250} height={250} src={imageData![0].url!} alt={heroName + '1'} />
                <Image width={250} height={250} src={imageData![1].url!} alt={heroName + '2'} />
                <Image width={250} height={250} src={imageData![2].url!} alt={heroName + '3'} />
                <Image width={250} height={250} src={imageData![3].url!} alt={heroName + '4'} />
            </div>
        )
    }
}
