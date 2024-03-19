'use client'
import { GPTDescription } from '@/entities/Hero'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'

export const MainDesc = ({ options }: { options: GPTDescription }) => {
    const t = useTranslations('card')
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">
                {t('card')} D&D - {options.name}
            </h1>
            <div className="flex gap-4">
                <Table isStriped aria-label="Важная информация">
                    <TableHeader>
                        <TableColumn>{t('class')}</TableColumn>
                        <TableColumn>{t('level')}</TableColumn>
                        <TableColumn>{t('exp')}</TableColumn>
                        <TableColumn>{t('race')}</TableColumn>
                        <TableColumn>{t('story')}</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>{options.speciality}</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>0</TableCell>
                            <TableCell>{options.race}</TableCell>
                            <TableCell>{options.story}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <h2 className="text-xl font-bold">{t('characterictics')}:</h2>
            <Table isStriped aria-label="Характеристики">
                <TableHeader>
                    <TableColumn>{t('characterictic')}</TableColumn>
                    <TableColumn>{t('mod')}</TableColumn>
                    <TableColumn>{t('competency')}</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>{t('strength')}</TableCell>
                        <TableCell>{`+${options?.characterictics?.strength}`}</TableCell>
                        <TableCell>{options?.competency?.strength}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{t('agility')}</TableCell>
                        <TableCell>{`+${options.characterictics.agility}`}</TableCell>
                        <TableCell>{options?.competency?.strength}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{t('endurance')}</TableCell>
                        <TableCell>{`+${options.characterictics.endurance}`}</TableCell>
                        <TableCell>{options?.competency?.endurance}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{t('intelligence')}</TableCell>
                        <TableCell>{`+${options?.characterictics?.intelligence}`}</TableCell>
                        <TableCell>{options?.competency?.intelligence}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{t('wisdom')}</TableCell>
                        <TableCell>{`+${options?.characterictics?.wisdom}`}</TableCell>
                        <TableCell>{options?.competency?.wisdom}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{t('charisma')}</TableCell>
                        <TableCell>{`+${options?.characterictics?.charisma}`}</TableCell>
                        <TableCell>{options?.competency?.charisma}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export const SkillsItemsDesc = ({ options, type = 'grid' }: { options: GPTDescription; type?: 'flex' | 'grid' }) => {
    const t = useTranslations('card')

    const Wrapper = ({ children }: { children: ReactNode }) => {
        if (type === 'grid') {
            return <div className="grid grid-cols-2 gap-4">{children}</div>
        }

        return <div className="flex flex-col gap-4">{children}</div>
    }

    return (
        <Wrapper>
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">{t('items')}:</h2>
                <Table isStriped aria-label="Снаряжение">
                    <TableHeader>
                        <TableColumn>{t('name')}</TableColumn>
                        <TableColumn>{t('desc')}</TableColumn>
                        <TableColumn>{t('using')}</TableColumn>
                        <TableColumn>{t('damage')}</TableColumn>
                        <TableColumn>{t('durability')}</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {options.item.map((item) => (
                            <TableRow key={item.name}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.using}</TableCell>
                                <TableCell>{item.damage}</TableCell>
                                <TableCell>{item.durability}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">{t('skills')}:</h2>
                <Table isStriped aria-label="Скиллы">
                    <TableHeader>
                        <TableColumn>{t('name')}</TableColumn>
                        <TableColumn>{t('desc')}</TableColumn>
                        <TableColumn>{t('using')}</TableColumn>
                        <TableColumn>{t('damage')}</TableColumn>
                        <TableColumn>{t('scrolls')}</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {options.skills.map((skill) => (
                            <TableRow key={skill.name}>
                                <TableCell>{skill.name}</TableCell>
                                <TableCell>{skill.description}</TableCell>
                                <TableCell>{skill.using}</TableCell>
                                <TableCell>{skill.damage}</TableCell>
                                <TableCell>{skill.numberOfUsing}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Wrapper>
    )
}
