import MealChatForm from "@/components/meal-chat-form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MousePointerClick } from "lucide-react";

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
            <DialogTrigger className="flex items-center gap-1 mt-9 text-sm text-zinc-300 border border-zinc-300 rounded-md p-2 font-semibold transition-colors hover:bg-zinc-300 hover:text-zinc-800">
              Começar
              <MousePointerClick className="h-4 w-4" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Converse com a IA
                </DialogTitle>
                <DialogDescription>
                  Se atente às instruções do chat abaixo.
                </DialogDescription>
              </DialogHeader>

              <MealChatForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  )
}