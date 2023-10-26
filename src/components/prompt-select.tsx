import React from 'react'
import { Label } from './ui/label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from './ui/select'
import { api } from '@/lib/axios'

interface Prompt {
  id: string
  title: string
  template: string
}

interface PromptSelectedProps {
  onPromptSelected: (template: string) => void
}

const PromptSelect = async () => {
  const response = await api.get('/prompts')
  const prompts: Prompt[] = response.data

  function handlePromptSelected(promptId: string) {
    const selectedPrompt = prompts.find(prompt => promptId === prompt.id)

    if (!selectedPrompt) {
      return
    }
  }

  return (
    <div>
      <Label>Prompt</Label>
      <Select onValueChange={handlePromptSelected}>
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