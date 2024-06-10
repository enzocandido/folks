import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface GameCardProps {
  gameName: string;
  description: string;
  imageUrl: string;
  tags: string;
}

export const GameCard = ({
  gameName,
  description,
  imageUrl,
  tags,
}: GameCardProps) => {
  return (
    <div className="p-4">
      <Card className="w-96 text-center">
        <CardHeader>
          <CardTitle>{gameName}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-xl"
            alt={gameName}
            src={imageUrl}
            width={400}
            height={400}
          />
          <p className="m-2 text-xs text-zinc-400">{tags}</p>
        </CardContent>
        <CardFooter className="items-center">
          <Button>Acessar site oficial</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
