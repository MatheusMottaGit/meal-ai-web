import React from 'react'
import { Label } from './ui/label'
import { UtensilsCrossed } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import PromptSelect from './prompt-select'

const MealChatForm = () => {
  return (
    <div className='flex gap-8'>
      <form className="space-y-6 w-full">
        <div className='space-y-4'>
          <div>
            <Label>Ingredientes</Label>
            <Input
              placeholder="Digite os ingredientes da sua refeição separados por vírgula"
              name='ingredients'
            />
          </div>

          <PromptSelect />
        </div>

        <Button className="gap-1 w-full" variant='outline'>
          Executar
          <UtensilsCrossed className="h-4 w-4" />
        </Button>
      </form >

      <Textarea
        placeholder="Resposta da IA..."
      />
    </div>
  )
}

export default MealChatForm