'use client'
import { createPromptProps } from '../model/lib/createPrompt'
import { Accordion, AccordionItem, Button, Card, CardBody, CardHeader, Divider, Input } from '@nextui-org/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { clamp } from '@/shared/lib/Math/minimax'
import { useLocale, useTranslations } from 'next-intl'
import {} from 'next-intl'
import { useRouter } from 'next/navigation'

export const CreateForm = () => {
    const t = useTranslations('createHero')
    const locale = useLocale()
    const router = useRouter()
    const [formData, setFormData] = useState<createPromptProps>({
        itemsNumber: 1,
        race: '',
        skillsNumber: 1,
        speciality: '',
        descCharacter: '',
        extraPrompt: '',
        itemsCharacter: '',
        numberimgs: 0,
        skillsCharacter: '',
        storyCharacter: '',
    })

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push(`/${locale}/hero?options=${JSON.stringify(formData)}`)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target
        let numberValue: number
        if (name === 'itemsNumber' || name === 'skillsNumber') {
            numberValue = clamp(+value, 1, 6)
        }
        if (name === 'numberimgs') {
            numberValue = clamp(+value, 0, 4)
        }
        setFormData((prevState) => ({ ...prevState, [name]: numberValue || value }))
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <h1 className="text-xl font-extrabold">{t('title')}</h1>
            <Input
                value={formData.race}
                onChange={handleChange}
                isRequired
                name="race"
                prefix="race_"
                label={t('race')}
            />
            <Input
                value={formData.speciality}
                onChange={handleChange}
                isRequired
                name="speciality"
                prefix="speciality_"
                label={t('speciality')}
            />
            <Card>
                <CardHeader>
                    <p>{t('title items')}</p>
                </CardHeader>
                <Divider />
                <CardBody className="gap-2">
                    <Input
                        value={String(formData.itemsNumber)}
                        onChange={handleChange}
                        isRequired
                        name="itemsNumber"
                        label={t('itemsNumber')}
                    />
                    <Input
                        value={formData.itemsCharacter}
                        onChange={handleChange}
                        name="itemsCharacter"
                        prefix="items_"
                        label={t('itemsCharacter')}
                    />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <p>{t('title skills')}</p>
                </CardHeader>
                <Divider />
                <CardBody className="gap-2">
                    <Input
                        value={String(formData.skillsNumber)}
                        onChange={handleChange}
                        isRequired
                        name="skillsNumber"
                        type="number"
                        label={t('skillsNumber')}
                    />
                    <Input
                        value={formData.skillsCharacter}
                        onChange={handleChange}
                        name="skillsCharacter"
                        prefix="skills_"
                        label={t('skillsCharacter')}
                    />
                </CardBody>
            </Card>

            <Accordion>
                <AccordionItem title={t('advanced')}>
                    <div className="flex flex-col gap-4">
                        <Input
                            value={formData.descCharacter}
                            onChange={handleChange}
                            name="descCharacter"
                            prefix="desc_"
                            label={t('descCharacter')}
                        />
                        <Input
                            value={formData.storyCharacter}
                            onChange={handleChange}
                            name="storyCharacter"
                            prefix="story_"
                            label={t('storyCharacter')}
                        />
                        <Input
                            value={String(formData.numberimgs)}
                            onChange={handleChange}
                            name="numberimgs"
                            type="number"
                            label={t('numberimgs')}
                        />
                        <Input
                            value={formData.extraPrompt}
                            onChange={handleChange}
                            name="extraPrompt"
                            label={t('extraPrompt')}
                            aria-multiline
                        />
                    </div>
                </AccordionItem>
            </Accordion>

            <p>{t('sorry')}</p>
            <Button color="success" type="submit">
                {t('generate')}
            </Button>
        </form>
    )
}
