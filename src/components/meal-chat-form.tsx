'use client'
import React, { useRef } from 'react'
import { Label } from './ui/label'
import { UtensilsCrossed } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import PromptSelect from './prompt-select'
import { useCompletion } from 'ai/react'
import 'dotenv/config'

const MealChatForm = () => {
  const promptRef = useRef<HTMLInputElement>(null)
  const prompt = promptRef.current?.value

  const {
    setInput,
    input,
    handleInputChange,
    completion,
    handleSubmit
  } = useCompletion({
    api: 'http://localhost:3333/ai/completion',
    body: {
      prompt
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })


  return (
    <div className='flex flex-col gap-8'>

      {/* chat form */}
      <div className='flex gap-6'>
        <form onSubmit={handleSubmit} className='space-y-4 w-full'>
          <div>
            <Label>Ingredientes</Label>

            <Input
              placeholder='Insira os ingredientes que deseja na receita, separados por vírgula'
              ref={promptRef}
            />
          </div>

          <PromptSelect onPromptSelected={setInput} />

          <Button type="submit" className='gap-1'>
            Executar
            <UtensilsCrossed className='w-4 h-4' />
          </Button>
        </form>

        <Textarea
          placeholder='Preview da instrução para IA...'
          value={input}
          onChange={handleInputChange}
        />
      </div>

      {/* ai textarea response */}
      <Textarea
        placeholder='Resposta da IA...'
        className='leading-relaxed h-72 resize-none'
        readOnly
        value={completion}
      />
    </div>
  )
}

export default MealChatForm