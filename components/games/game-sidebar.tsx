// @ts-nocheck
"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Settings } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";
import { GameCard } from "./game-card";
import Image from "next/image";

const games = [
  {
    gameName: "VALORANT",
  },
  {
    gameName: "League of Legends",
  },
  {
    gameName: "Minecraft",
  },
  {
    gameName: "Fortnite",
  },
  {
    gameName: "CS2",
  },
  {
    gameName: "GTA 5",
  },
  {
    gameName: "Fall Guys",
  },
  {
    imageUrl:
      "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg",
  },
];

export const GameSidebar = () => {
  const { onOpen } = useModal();

  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-[#292929] bg-[#C7C7C7]">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none" asChild>
          <button className="w-full text-md font-semibold px-3 flex items-center h-16 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition">
            Descoberta
            <ChevronDown className="h-4 w-4 m-1 md:ml-auto" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
          <DropdownMenuItem
            className="px-3 py-2 text-sm cursor-pointer"
            onClick={() => onOpen("changePreferences")}
          >
            Alterar preferências
            <Settings className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ScrollArea>
        {games.map((game, index) => (
          <div
            key={index}
            className="items-center flex justify-center text-center h-full"
          >
            <p className="text-md font-semibold px-3 flex items-center h-36 border-neutral-200 dark:border-neutral-800 border-b-2 dark:bg-[#292929]">
              {game.gameName}
            </p>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};
