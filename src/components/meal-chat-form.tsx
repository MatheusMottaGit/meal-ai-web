import React from 'react'
import { Label } from './ui/label'
import { UtensilsCrossed } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const MealChatForm = () => {
  return (
    <>
      <form className="space-y-4 w-full">
        <div>
          <Label>Ingredientes</Label>
          <Input placeholder="Digite os ingredientes da sua refeição separados por vírgula (,)" />
        </div>

        <div>
          <Label>Ingredientes</Label>
          <Input placeholder="Digite os ingredientes da sua refeição separados por vírgula (,)" />
        </div>

        <Button className="w-full gap-1 bg-white text-zinc-900 font-semibold">
          Executar
          <UtensilsCrossed className="h-4 w-4" />
        </Button>
      </form>

      <Textarea placeholder="Resposta da IA..." />
    </>
  )
}

export default MealChatForm