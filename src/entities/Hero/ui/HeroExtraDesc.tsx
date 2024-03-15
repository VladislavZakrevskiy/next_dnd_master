import { FC } from 'react'
import { GPTDescription } from '../model/types/gptDescription'
import { Card, CardBody } from '@nextui-org/card'

interface HeroExtraDescProps {
    gptDescription: GPTDescription
}

export const HeroExtraDesc: FC<HeroExtraDescProps> = ({ gptDescription }) => {
    const { skills, item } = gptDescription

    return (
        <div className="flex flex-col gap-4">
            <div>
                <p style={{ fontWeight: 'bold' }} className="font-bold text-black text-xl">
                    Item in inventory:
                </p>
                {item.map((value, i) => (
                    <Card key={'item-' + i} style={{ margin: 10 }}>
                        <CardBody className="gap-1">
                            <div className="flex gap-2">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    Name:
                                </p>
                                <p className="flex gap-8">{value.name}</p>
                            </div>
                            <div className="flex gap-2">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    Description:
                                </p>
                                <p className="flex gap-8">{value.description}</p>
                            </div>
                            <div className="flex gap-2">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    Using:
                                </p>
                                <p className="flex gap-8">{value.using}</p>
                            </div>
                            <div className="flex gap-2">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    Damage:
                                </p>
                                <p className="flex gap-8">{value.damage}</p>
                            </div>
                            <div className="flex gap-2">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    Durability:
                                </p>
                                <p className="flex gap-8">{value.durability}</p>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
            <div>
                <p style={{ fontWeight: 'bold' }} className="text-bold text-black text-xl">
                    Skills in inventory:
                </p>
                {skills.map((value, i) => (
                    <Card key={'skill-' + i} style={{ margin: 10 }}>
                        <CardBody className="gap-1">
                            <div className="flex gap-2">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    Name:
                                </p>
                                <p className="flex gap-8">{value.name}</p>
                            </div>
                            <div className="flex gap-2">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    Description:
                                </p>
                                <p className="flex gap-8">{value.description}</p>
                            </div>
                            <div className="flex gap-2">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    Using:
                                </p>
                                <p className="flex gap-8">{value.using}</p>
                            </div>
                            <div className="flex gap-2">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    Damage:
                                </p>
                                <p className="flex gap-8">{value.damage}</p>
                            </div>
                            <div className="flex gap-2">
                                <p style={{ fontWeight: 'bold' }} className="font-bold">
                                    Durability:
                                </p>
                                <p className="flex gap-8">{value.numberOfUsing}</p>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    )
}
