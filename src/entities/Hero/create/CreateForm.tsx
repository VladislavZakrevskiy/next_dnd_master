import { RedirectType, permanentRedirect, redirect } from 'next/navigation'
import { AutoComplete } from '@/shared/ui/AutoComplete'
import { Input } from '@nextui-org/input'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Button } from '@nextui-org/button'
import { GPTDescription } from '../model/types/gptDescription'
import { createPromptProps } from '../model/lib/createPrompt'
import { clamp } from '@/shared/lib/Math/minimax'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const CreateForm = () => {
    return (
        <form
            className="flex flex-col gap-4"
            action={async (form) => {
                'use server'
                const options: createPromptProps = {
                    descCharacter: form.get('descCharacter')?.toString() || '',
                    itemsCharacter: form.get('itemsCharacter')?.toString() || '',
                    itemsNumber: clamp(+(form.get('itemsNumber')?.toString() ?? 1), 1, 6),
                    numberimgs: clamp(+(form.get('numberimgs')?.toString() ?? 1), 1, 4),
                    race: form.get('race')?.toString() || '',
                    skillsCharacter: form.get('skillsCharacter')?.toString() || '',
                    skillsNumber: clamp(+(form.get('skillsNumber')?.toString() ?? 1), 1, 6),
                    speciality: form.get('speciality')?.toString() || '',
                    storyCharacter: form.get('storyCharacter')?.toString() || 'обычный',
                    extraPrompt: form.get('extraPrompt')?.toString() || '',
                }
                // console.log(`/hero?options=${encodeURIComponent(JSON.stringify(options))}`)
                redirect(`/hero?options=${encodeURIComponent(JSON.stringify(options))}`)
            }}
        >
            <h1 className="text-xl font-extrabold">Create Your Perfect Hero!</h1>
            <Input isRequired name="descCharacter" prefix="desc_" label="Description" />
            <Input isRequired name="storyCharacter" prefix="story_" label="Story" />
            <Card>
                <CardHeader>
                    <p>Items in inventory</p>
                </CardHeader>
                <Divider />
                <CardBody className="gap-2">
                    <Input name="itemsNumber" label="Number of items (<7)" />
                    <Input isRequired name="itemsCharacter" prefix="items_" label="Items of inventory" />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <p>Skills</p>
                </CardHeader>
                <Divider />
                <CardBody className="gap-2">
                    <Input isRequired name="skillsNumber" type="number" label="Number of skills (<7)" />
                    <Input isRequired name="skillsCharacter" prefix="skills_" label="Skills" />
                </CardBody>
            </Card>
            <Input isRequired name="race" prefix="race_" label="Race" />
            <Input isRequired name="speciality" prefix="speciality_" label="Class" />
            <Input isRequired name="numberimgs" type="number" label="Number of Imgs (<5)" />
            <Input name="extraPrompt" label="Extra prompt with your specific wishes (optional)" />

            <Button color="success" type="submit">
                Submit
            </Button>
        </form>
    )
}
