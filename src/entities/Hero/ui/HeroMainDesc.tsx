import { Card, CardBody, CardHeader, Divider, Input, Textarea } from '@nextui-org/react'
import { GPTDescription } from '../model/types/gptDescription'
import { FC } from 'react'
import { useTranslations } from 'next-intl'
import { CharTable } from './CharTable'

interface HeroMainDescProps {
    gptDescription: GPTDescription
}

export const HeroMainDes: FC<HeroMainDescProps> = ({ gptDescription }) => {
    const { name, speciality, story, race } = gptDescription
    const t = useTranslations('hero')

    return (
        <div className="flex flex-col gap-4">
            <CharTable options={gptDescription} />
            <Card>
                <CardHeader>
                    <p style={{ fontWeight: 'bold' }} className="font-bold text-black">
                        {t('name')}
                    </p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <Input name="name" className="text-black" defaultValue={name} />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <p style={{ fontWeight: 'bold' }} className="font-bold text-black">
                        {t('race')}
                    </p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <Input name="race" className="text-black" defaultValue={race} />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <p style={{ fontWeight: 'bold' }} className="font-bold text-black">
                        {t('class')}
                    </p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <Input name="speciality" defaultValue={speciality} className="text-black" />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <p style={{ fontWeight: 'bold' }} className="text-bold text-black">
                        {t('story')}
                    </p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <Textarea name="story" defaultValue={story} className="text-black" />
                </CardBody>
            </Card>
        </div>
    )
}
