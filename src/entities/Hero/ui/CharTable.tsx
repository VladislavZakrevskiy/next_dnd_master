'use client'
import { useTranslations } from 'next-intl'
import { GPTDescription } from '..'
import { Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'

export const CharTable = ({ options }: { options: GPTDescription }) => {
    const { characterictics, competency } = options
    const t = useTranslations('card')
    return (
        <Table isStriped>
            <TableHeader>
                <TableColumn>{t('characterictic')}</TableColumn>
                <TableColumn>{t('mod')}</TableColumn>
                <TableColumn>{t('competency')}</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>{t('strength')}</TableCell>
                    <TableCell>
                        <Input name="strength" defaultValue={String(characterictics?.strength)} />
                    </TableCell>
                    <TableCell>
                        <Input
                            name="competency-strength"
                            defaultValue={competency?.strength?.length != 0 ? competency?.strength?.join(', ') : ''}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>{t('agility')}</TableCell>
                    <TableCell>
                        <Input name="agility" defaultValue={String(characterictics?.agility)} />
                    </TableCell>
                    <TableCell>
                        <Input
                            name="competency-agility"
                            defaultValue={competency?.agility?.length != 0 ? competency?.agility?.join(', ') : ''}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>{t('endurance')}</TableCell>
                    <TableCell>
                        <Input name="endurance" defaultValue={String(characterictics?.endurance)} />
                    </TableCell>
                    <TableCell>
                        <Input
                            name="competency-endurance"
                            defaultValue={competency?.endurance?.length != 0 ? competency?.endurance?.join(', ') : ''}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>{t('intelligence')}</TableCell>
                    <TableCell>
                        <Input name="intelligence" defaultValue={String(characterictics?.intelligence)} />
                    </TableCell>
                    <TableCell>
                        <Input
                            name="competency-intelligence"
                            defaultValue={
                                competency?.intelligence?.length != 0 ? competency?.intelligence?.join(', ') : ''
                            }
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>{t('wisdom')}</TableCell>
                    <TableCell>
                        <Input name="wisdom" defaultValue={String(characterictics?.wisdom)} />
                    </TableCell>
                    <TableCell>
                        <Input
                            name="competency-wisdom"
                            defaultValue={competency?.wisdom?.length != 0 ? competency?.wisdom?.join(', ') : ''}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>{t('charisma')}</TableCell>
                    <TableCell>
                        <Input name="charisma" defaultValue={String(characterictics?.charisma)} />
                    </TableCell>
                    <TableCell>
                        <Input
                            name="competency-charisma"
                            defaultValue={competency?.charisma?.length != 0 ? competency?.charisma?.join(', ') : ''}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
