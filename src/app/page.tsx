import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChefHat, Globe, Utensils } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-4 py-2 border-b border-b-zinc-600">
        <div className="text-zinc-600 font-semibold flex items-center gap-1">
          <ChefHat className="w-6 h-6" />
          TasteBot
        </div>

        <Button variant='outline' className="border-zinc-600 text-zinc-500 border-2 gap-2">
          Ver histórico
          <Globe className="w-4 h-4" />
        </Button>
      </header>
    </div>
  )
}
