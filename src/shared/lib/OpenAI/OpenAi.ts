import { OpenAI as OpenAiAPI } from 'openai'

export class OpenAI {
    private openai: OpenAiAPI

    constructor() {
        this.openai = new OpenAiAPI({ apiKey: process.env.OPEN_AI_API })
    }

    async generateText(prompt: string): Promise<string | undefined> {
        try {
            const response = await this.openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }],
                stream: true,
            })

            if (response) {
                const answer = []
                for await (const chunk of response) {
                    answer.push(chunk.choices[0]?.delta?.content || '')
                    // process.stdout.write(chunk.choices[0]?.delta?.content || '')
                }
                return answer.join('')
            } else {
                console.error('Empty or invalid response from OpenAI API')
                return undefined
            }
        } catch (error) {
            console.error('Error sending request:', error)
            return undefined
        }
    }

    async generateImage(
        prompt: string,
        numImages: number = 1,
    ) {
        try {
            const response = await this.openai.images.generate({
                prompt: prompt,
                n: numImages,
                response_format: 'url',
            })
            return response.data
        } catch (error) {
            console.error('Error:', error)
            return null
        }
    }
}
