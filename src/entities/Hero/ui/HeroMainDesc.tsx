import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import { GPTDescription } from '../model/types/gptDescription'
import { FC } from 'react'

interface HeroMainDescProps {
    gptDescription: GPTDescription
}

export const HeroMainDes: FC<HeroMainDescProps> = ({ gptDescription }) => {
    const { name, speciality, story, race } = gptDescription

    return (
        <div className="flex flex-col gap-4">
            <Card>
                <CardHeader>
                    <p style={{ fontWeight: 'bold' }} className="font-bold text-black">
                        Name:
                    </p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p className="text-black">{name}</p>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <p style={{ fontWeight: 'bold' }} className="font-bold text-black">
                        Race:
                    </p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p className="text-black">{race}</p>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <p style={{ fontWeight: 'bold' }} className="font-bold text-black">
                        Class:
                    </p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p className="text-black">{speciality}</p>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <p style={{ fontWeight: 'bold' }} className="text-bold text-black">
                        Story:
                    </p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p className="text-black">{story}</p>
                </CardBody>
            </Card>
        </div>
    )
}
