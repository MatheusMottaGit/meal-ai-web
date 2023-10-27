'use client'
import React, { useEffect, useState } from 'react'
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

const PromptSelect = (props: PromptSelectedProps) => {
  const [prompts, setPrompts] = useState<Prompt[]>([])

  useEffect(() => {
    api.get('/prompts').then(response => {
      setPrompts(response.data)
    })
  }, [])

  function handlePromptSelected(promptId: string) {
    const selectedPrompt = prompts.find(prompt => promptId === prompt.id)

    if (!selectedPrompt) {
      return
    }

    props.onPromptSelected(selectedPrompt.template)
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