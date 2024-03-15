import { CreateForm } from '@/entities/Hero/create/CreateForm'
import { createPromptProps } from '@/entities/Hero/model/lib/createPrompt'
import { OpenAI } from '@/shared/lib/OpenAI/OpenAi'
import { useState } from 'react'

export default function Home() {
    return <CreateForm />
}
