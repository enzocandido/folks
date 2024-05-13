"use client";

import { Gamepad2 } from "lucide-react";
import { ActionTooltip } from "./action-tooltip";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const GamesToggle = () => {
  const router = useRouter();
  const pathname = usePathname()

  const onClick = () => {
    router.push("/games");
  };

  return (
    <div>
      <ActionTooltip side="right" align="center" label="Descobrir jogos">
        <button 
          className="group flex items-center"
          onClick={onClick}
          >
          <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            pathname !== "/games" && "group-hover:h-[20px]",
            pathname === "/games" ? "h-[36px]" : "h-[8px]",
          )}
        />
          <div className={cn(
            "flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-black",
            pathname === "/games" && "bg-primary/10 text-primary rounded-[16px]",
          )}
            >
            <Gamepad2
              className="group-hover:text-white transition text-zinc-50"
              size={25}
              />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};
