export interface GPTDescription {
    name: string
    race: string
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
