import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Flag } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* presentation section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 w-[864px]">
          <h1 className="text-5xl text-zinc-300 font-roboto font-bold">
            Descubra o potencial dos alimentos
          </h1>

          <span className="text-zinc-400 text-center">
            Explore o mundo da culinária com a ajuda da Inteligência Artificial. Insira os ingredientes que você tem em mãos e deixe nossa IA guiar você na criação de pratos deliciosos e surpreendentes!
          </span>

          <Dialog>
            <DialogTrigger>
              <Button className="gap-1.5 mt-9 text-zinc-100" variant='outline'>
                Começar
                <Flag className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <h1>Converse com IA</h1>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  )
}