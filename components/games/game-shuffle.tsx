"use client";

import { Shuffle } from "lucide-react";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/use-modal-store";

export const GameShuffle = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <Button
        className="flex items-center m-4"
        onClick={() => onOpen("changePreferences")}
      >
        <Shuffle className="h-4 w-4" />
      </Button>
    </div>
  );
};
