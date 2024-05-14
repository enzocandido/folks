// @ts-nocheck

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export const GameSidebar = async () => {
  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-[#292929] bg-[#C7C7C7]">
      <ScrollArea className="flex-1 px-3">
        <div className="mt-2">
          <p className="text-zinc-50 flex text-base max-w-48">
            Descubra seu próximo jogo favorito no Folks!
          </p>
        </div>
        <Separator className="bg-zinc-200 dark:bg-zinc-700 rounded-md my-2" />
      </ScrollArea>
    </div>
  );
};
