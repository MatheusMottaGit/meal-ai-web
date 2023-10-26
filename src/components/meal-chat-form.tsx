import React from 'react'
import { Label } from './ui/label'
import { UtensilsCrossed } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const MealChatForm = () => {
  return (
    <div className='flex gap-8'>
      <form className="space-y-6 w-full">
        <div className='space-y-4'>
          <div>
            <Label>Ingredientes</Label>
            <Input placeholder="Digite os ingredientes da sua refeição separados por vírgula" />
          </div>

          <div>
            <Label>Prompt</Label>
            <Select>
              <SelectTrigger>
                <SelectValue className='text-muted-foreground' placeholder='Selecione um prompt de comando' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='nova receita'>Opções de receitas com os ingredientes</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="gap-1 w-full" variant='outline'>
          Executar
          <UtensilsCrossed className="h-4 w-4" />
        </Button>
      </form >

      <Textarea placeholder="Resposta da IA..." />
    </div>
  )
}

export default MealChatForm