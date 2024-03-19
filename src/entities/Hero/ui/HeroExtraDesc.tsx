import { FC } from 'react'
import { GPTDescription } from '../model/types/gptDescription'
import { Card, CardBody } from '@nextui-org/card'
import { useTranslations } from 'next-intl'
import { Input } from '@nextui-org/react'

interface HeroExtraDescProps {
    gptDescription: GPTDescription
}

export const HeroExtraDesc: FC<HeroExtraDescProps> = ({ gptDescription }) => {
    const { skills, item } = gptDescription
    const t = useTranslations('hero')

    return (
        <div className="flex flex-col gap-4">
            <div>
                <p style={{ fontWeight: 'bold' }} className="font-bold text-black text-xl">
                    {t('items')}
                </p>
                {item.map((value, i) => (
                    <Card key={'item-' + i + 10} style={{ margin: 10 }}>
                        <CardBody className="gap-1">
                            <div className="flex gap-2 item-center">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    {t('name')}
                                </p>
                                <Input className="flex gap-8" name={`item-name-${i}`} defaultValue={value.name} />
                            </div>
                            <div className="flex gap-2 item-center">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    {t('description')}
                                </p>
                                <Input
                                    className="flex gap-8"
                                    name={`item-description-${i}`}
                                    defaultValue={value.description}
                                />
                            </div>
                            <div className="flex gap-2 item-center">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    {t('using')}
                                </p>
                                <Input className="flex gap-8" name={`item-using-${i}`} defaultValue={value.using} />
                            </div>
                            <div className="flex gap-2 item-center">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    {t('damage')}
                                </p>
                                <Input
                                    className="flex gap-8"
                                    name={`item-damage-${i}`}
                                    defaultValue={String(value.damage)}
                                />
                            </div>
                            <div className="flex gap-2 item-center">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    {t('durability')}
                                </p>
                                <Input
                                    fullWidth
                                    className="flex gap-8"
                                    name={`item-durability-${i}`}
                                    defaultValue={String(value.durability)}
                                />
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
            <div>
                <p style={{ fontWeight: 'bold' }} className="text-bold text-black text-xl">
                    {t('skills')}
                </p>
                {skills.map((value, i) => (
                    <Card key={'skill-' + i + 10} style={{ margin: 10 }}>
                        <CardBody className="gap-1">
                            <div className="flex gap-2 item-center">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    {t('name')}
                                </p>
                                <Input className="flex gap-8" name={`skills-name-${i}`} defaultValue={value.name} />
                            </div>
                            <div className="flex gap-2 item-center">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    {t('description')}
                                </p>
                                <Input
                                    className="flex gap-8 "
                                    name={`skills-description-${i}`}
                                    defaultValue={value.description}
                                />
                            </div>
                            <div className="flex gap-2 item-center">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    {t('using')}
                                </p>
                                <Input className="flex gap-8" name={`skills-using-${i}`} defaultValue={value.using} />
                            </div>
                            <div className="flex gap-2 item-center">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    {t('damage')}
                                </p>
                                <Input
                                    className="flex gap-8"
                                    name={`skills-damage-${i}`}
                                    defaultValue={String(value.damage)}
                                />
                            </div>
                            <div className="flex gap-2 item-center">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    {t('durability')}
                                </p>
                                <Input
                                    className="flex gap-8"
                                    name={`skills-numberOfUsing-${i}`}
                                    defaultValue={String(value.numberOfUsing)}
                                />
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    )
}
