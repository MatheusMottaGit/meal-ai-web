import React from 'react'
import { Label } from './ui/label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from './ui/select'
import { api } from '@/lib/axios'

interface Prompt {
  id: string
  title: string
  template: string
}

const PromptSelect = async () => {
  const response = await api.get('/prompts')
  const prompts: Prompt[] = response.data

  return (
    <div>
      <Label>Prompt</Label>
      <Select>
        <SelectTrigger>
          <SelectValue className='text-muted-foreground' placeholder='Selecione um prompt de comando' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {prompts.map(prompt => {
              return (
                <SelectItem
                  key={prompt.id}
                  value={prompt.id}
                >
                  {prompt.title}
                </SelectItem>
              )
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default PromptSelect