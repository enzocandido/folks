import { Menu, Shuffle } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { NavigationSidebar } from "../navigation/navigation-sidebar";
import { GameSidebar } from "./game-sidebar";
import { GameShuffle } from "./game-shuffle";

export const GameChatHeader = () => {
  return (
    <div>
      <div className="flex justify-between text-center">
        <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 flex gap-0">
              <div className="w-[72px]">
                <NavigationSidebar />
              </div>
              <GameSidebar />
            </SheetContent>
          </Sheet>
        </div>
        <div>
          <GameShuffle />
        </div>
      </div>
    </div>
  );
};
