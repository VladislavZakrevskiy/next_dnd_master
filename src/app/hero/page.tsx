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
    // const gptRes: GPTDescription = {
    //     name: 'Гретхер Слизькокожий',
    //     race: 'Рептилия',
    //     speciality: 'Маг болота',
    //     story: 'Гретхер Слизькокожий родился и вырос в толще густых болот, где изучал древние ритуалы и магию болотных змей. Он проник в тайны темных вод и обрел силу контролировать их, используя ее в своих магических поединках.',
    //     item: [
    //         {
    //             name: 'Посох Кочевника',
    //             description: 'Древний посох, вырезанный из корня могучего древа болота',
    //             using: 'Используется для усиления магических заклинаний',
    //             damage: 3,
    //             durability: 10,
    //         },
    //         {
    //             name: 'Амулет Темной Воды',
    //             description: 'Амулет, наполненный силой болотных вод',
    //             using: 'Повышает защиту от магических атак',
    //             damage: 0,
    //             durability: 1,
    //         },
    //     ],
    //     skills: [
    //         {
    //             name: 'Заклинание Ядовитого Тумана',
    //             description: 'Создает густой туман, насыщенный ядовитыми испарениями',
    //             using: 'Атакует противника, ослабляя его защиту',
    //             damage: 4,
    //             numberOfUsing: 3,
    //         },
    //         {
    //             name: 'Превращение в Жабу',
    //             description: 'Превращает Гретхера в ядовитую болотную жабу',
    //             using: 'Увеличивает скорость и маневренность, приносит дополнительный урон укусом',
    //             damage: 2,
    //             numberOfUsing: 2,
    //         },
    //     ],
    //     promptDALLE3:
    //         'Рептилия-маг болота по имени Гретхер Слизькокожий, обладающий древними знаниями болот и контролем над темными водами. Вооруженный Посохом Кочевника и защищенный Амулетом Темной Воды. Он может призывать Ядовитый Туман и превращаться в Жабу для увеличения скорости и урона.',
    // }
    const imageData = await OpenAiAPI.generateImage(gptRes.promptDALLE3, options.numberimgs)
    // const imageData = [
    //     {
    //         url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xIY0Kl4IiTbXzfloauwOL4J9/user-mGiKdlghlKo5S6murgZgswcW/img-240osfj8CgQV8x1kD9SF7onj.png?st=2024-03-15T08%3A10%3A24Z&se=2024-03-15T10%3A10%3A24Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-03-15T06%3A47%3A46Z&ske=2024-03-16T06%3A47%3A46Z&sks=b&skv=2021-08-06&sig=7sbfv6FmAzmqV47CUPK/ge6/KfkLTJP1uebGAbImr8c%3D',
    //     },
    //     {
    //         url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xIY0Kl4IiTbXzfloauwOL4J9/user-mGiKdlghlKo5S6murgZgswcW/img-yKJPXCeYzg6YWtbe9YdbvHje.png?st=2024-03-15T08%3A10%3A24Z&se=2024-03-15T10%3A10%3A24Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-03-15T06%3A47%3A46Z&ske=2024-03-16T06%3A47%3A46Z&sks=b&skv=2021-08-06&sig=2BrQmNoCrJQAOoa/sV3JZM7AKOg4JpS550sWharwlzk%3D',
    //     },
    //     {
    //         url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xIY0Kl4IiTbXzfloauwOL4J9/user-mGiKdlghlKo5S6murgZgswcW/img-UAgytfYX3rn6drmpHKTRGMyz.png?st=2024-03-15T08%3A10%3A24Z&se=2024-03-15T10%3A10%3A24Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-03-15T06%3A47%3A46Z&ske=2024-03-16T06%3A47%3A46Z&sks=b&skv=2021-08-06&sig=jIW%2BkAEBrXcJc57ZB8ZGC1me73VZjAeOkXyV1C9raz4%3D',
    //     },
    //     {
    //         url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-xIY0Kl4IiTbXzfloauwOL4J9/user-mGiKdlghlKo5S6murgZgswcW/img-TZKjKtXEYDQjN1lmYsafosmC.png?st=2024-03-15T08%3A10%3A24Z&se=2024-03-15T10%3A10%3A24Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-03-15T06%3A47%3A46Z&ske=2024-03-16T06%3A47%3A46Z&sks=b&skv=2021-08-06&sig=i1X2jKacbRw7PxVC8OThZaxj4iYZzRjMqUI8M2ITxfA%3D',
    //     },
    // ]
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 grid-rows-1 justify-center items-center">
                <div className="flex justify-center items-center">
                    <HeroAvatar imageSrc={imageData || []} heroName={gptRes.name} />
                </div>
                <HeroMainDes gptDescription={gptRes} />
            </div>
            <HeroExtraDesc gptDescription={gptRes} />
        </div>
    )
}

export default HeroPage
