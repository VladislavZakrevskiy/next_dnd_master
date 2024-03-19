export interface GPTDescription {
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
}
