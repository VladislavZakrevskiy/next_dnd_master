import Image from 'next/image'
import React, { FC } from 'react'

interface HeroAvatarProps {
    imageSrc: {
        b64_json?: string
        url?: string
    }[]
    heroName?: string
}

export const HeroAvatar: FC<HeroAvatarProps> = ({ imageSrc, heroName }) => {
    const imageSrcLength = imageSrc.length
    if (imageSrcLength === 1) {
        return <Image width={500} height={500} src={imageSrc[0].url!} alt={heroName + '1'} />
    }
    if (imageSrcLength === 2) {
        return (
            <div className="flex">
                <Image width={350} height={350} src={imageSrc[0].url!} alt={heroName + '1'} />
                <Image width={350} height={350} src={imageSrc[1].url!} alt={heroName + '2'} />
            </div>
        )
    }
    if (imageSrcLength === 3) {
        return (
            <div className="flex w-[500px] flex-wrap justify-center items-center">
                <Image width={250} height={250} src={imageSrc[0].url!} alt={heroName + '1'} />
                <Image width={250} height={250} src={imageSrc[1].url!} alt={heroName + '2'} />
                <Image width={250} height={250} src={imageSrc[2].url!} alt={heroName + '3'} />
            </div>
        )
    }
    if (imageSrcLength === 4) {
        return (
            <div className="grid grid-cols-2 grid-rows-2 ">
                <Image width={250} height={250} src={imageSrc[0].url!} alt={heroName + '1'} />
                <Image width={250} height={250} src={imageSrc[1].url!} alt={heroName + '2'} />
                <Image width={250} height={250} src={imageSrc[2].url!} alt={heroName + '3'} />
                <Image width={250} height={250} src={imageSrc[3].url!} alt={heroName + '4'} />
            </div>
        )
    }
}
