import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChefHat, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <header className="border-b border-b-muted-foreground py-3 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ChefHat className="w-6 h-6" />
          <span className="font-semibold">TasteBot</span>
        </div>

        <Button variant='outline' className="border-muted-foreground gap-2">
          Ver produtos
          <Globe className='h-4 w-4' />
        </Button>
      </header>

      <main className="flex flex-col flex-1 gap-12 py-12 px-16 justify-center">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-3xl font-semibold">Descubra o potencial dos alimentos e aprenda novas experiências culinárias!</h1>

          <span className="text-muted-foreground/60">
            Insira os ingredientes que você tem em mãos e deixe nossa IA guiar você na criação de pratos com as suas opções.
          </span>
        </div>

        <section className="flex flex-1 gap-6">
          <div className="flex-1">
            <form className="space-y-6">
              <div className="grid gap-2">
                <Label>Ingredientes</Label>
                <Input placeholder="Insira os ingredientes separados por vírgula (,)" />
              </div>

              <Textarea placeholder="Resposta da IA..." />
            </form>
          </div>

          <aside className="w-96 border-muted-foreground rounded-md p-2 border">

          </aside>
        </section>
      </main>
    </div>
  )
}
