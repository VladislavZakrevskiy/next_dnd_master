const interfaceGPT = `interface GPTDescription {
    name: string
    race: string
    characterictics: {
        strength: number
        agility: number
        endurance: number
        intelligence: number
        wisdom: number
        charisma: number
    }
    competency: {
        strength: string[]
        agility: string[]
        endurance: string[]
        intelligence: string[]
        wisdom: string[]
        charisma: string[]
    }
    speciality: string // класс, но class зарезервирован за js
    story: string
    item: {
        name: string
        description: string
        using: string
        damage: number
        durability: number
    }[]
    skills: {
        name: string
        description: string
        using: string
        damage: number
        numberOfUsing: number
    }[]
    promptDALLE3: string
}`

export interface createPromptProps {
    descCharacter?: string | 'угарный' | 'обычный' | 'постапокалиптичный' | 'безумный'
    storyCharacter?: string | 'грустая' | 'мотивационная' | 'душераздирающая'
    itemsNumber: number | 0 | 1 | 2 | 3
    itemsCharacter?: string | 'угарных' | 'обычных' | 'постапокалиптических'
    skillsNumber: number | 0 | 1 | 2 | 3
    skillsCharacter?: string | 'угарных' | 'обычных' | 'постапокалиптических'
    race: string | 'Человек' | 'Рептилия' | 'Норд' | 'Навозный жук' | 'Гуманоидный пришелец' | 'Кит' | 'Белый Гризли'
    speciality:
        | string
        | 'Воин'
        | 'Маг крови'
        | 'Поэт'
        | 'Летчик-испытатель'
        | 'Фараон Древнего Египта'
        | 'Скуф'
        | 'Dead Inside'
    extraPrompt?: string
    numberimgs?: number
}

export function createPrompt(options: createPromptProps) {
    const {
        descCharacter,
        itemsCharacter,
        itemsNumber,
        race,
        skillsCharacter,
        skillsNumber,
        speciality,
        storyCharacter,
        extraPrompt,
    } = options

    return `Придумай ${descCharacter} персонажа в dnd
    Напиши его ${storyCharacter} предысторию, ${itemsNumber} подходящих ${itemsCharacter} предмета, ${skillsNumber} подходящих ${skillsCharacter} способности, имя, изображение
    
    Раса: ${race}
    Класс: ${speciality}
    
    ${extraPrompt}
    
    напиши в формате JSON по интерфейсу: 
    ${interfaceGPT}
    
    в promptDALLE3 напиши идеальный промпт для Dall-e 3
`}
