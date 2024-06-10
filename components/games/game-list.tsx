import { GameCard } from "./game-card";

const games = [
  {
    gameName: "VALORANT",
    description:
      "Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro em primeira pessoa desenvolvido e publicado pela Riot Games.",
    imageUrl: "/images/valorant.jpg",
    tags: "Ação, FPS, Multijogador",
  },
  {
    gameName: "League of Legends",
    description:
      "League of Legends é um jogo eletrônico de arena de batalha multijogador desenvolvido e publicado pela Riot Games.",
    imageUrl: "/images/lol.jpg",
    tags: "MOBA, Multijogador, Estratégia",
  },
  {
    gameName: "Minecraft",
    description:
      "Minecraft é um jogo eletrônico sandbox de sobrevivência criado pelo desenvolvedor sueco Markus 'Notch' Persson.",
    imageUrl: "/images/minecraft.jpg",
    tags: "Sandbox, Sobrevivência, Criativo",
  },
  {
    gameName: "Fortnite",
    description:
      "Fortnite é um jogo eletrônico multijogador online revelado originalmente em 2011 e desenvolvido pela Epic Games.",
    imageUrl: "/images/fortnite.jpg",
    tags: "Battle Royale, Ação, Multijogador",
  },
  {
    gameName: "CS2",
    description:
      "Counter-Strike 2 (CS2) é um jogo de tiro em primeira pessoa competitivo desenvolvido e publicado pela Valve.",
    imageUrl: "/images/cs2.jpg",
    tags: "Ação, FPS, Multijogador",
  },
  {
    gameName: "GTA 5",
    description:
      "Grand Theft Auto V (GTA 5) é um jogo de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games.",
    imageUrl: "/images/gta5.jpg",
    tags: "Ação, Aventura, Mundo Aberto",
  },
  {
    gameName: "Fall Guys",
    description:
      "Fall Guys é um jogo de batalha real multijogador desenvolvido pela Mediatonic e publicado pela Devolver Digital.",
    imageUrl: "/images/fallguys.jpg",
    tags: "Battle Royale, Multijogador, Plataforma",
  },
  {
    gameName: "Rainbow Six Siege",
    description:
      "Tom Clancy's Rainbow Six Siege é um jogo de tiro tático desenvolvido pela Ubisoft Montreal e publicado pela Ubisoft.",
    imageUrl: "/images/r6.jpg",
    tags: "Tático, FPS, Multijogador",
  },
];

export const GameList = () => {
  return (
    <div>
      <div className="md:grid grid-cols-4 gap-4">
        {games.map((game, index) => (
          <div key={index} className="items-center">
            <GameCard
              gameName={game.gameName}
              description={game.description}
              imageUrl={game.imageUrl}
              tags={game.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
