import { GameCard } from "./game-card";

const games = [
  {
    gameName: "VALORANT",
    description:
      "Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro em primeira pessoa desenvolvido e publicado pela Riot Games.",
    imageUrl:
      "https://media.rawg.io/media/games/b11/b11127b9ee3c3701bd15b9af3286d20e.jpg",
    tags: "Ação, FPS, Multijogador",
  },
  {
    gameName: "League of Legends",
    description:
      "League of Legends é um jogo eletrônico de arena de batalha multijogador desenvolvido e publicado pela Riot Games.",
    imageUrl:
      "https://media.rawg.io/media/games/78b/78bc81e247fc7e77af700cbd632a9297.jpg",
    tags: "MOBA, Multijogador, Estratégia",
  },
  {
    gameName: "Minecraft",
    description:
      "Minecraft é um jogo eletrônico sandbox de sobrevivência criado pelo desenvolvedor sueco Markus 'Notch' Persson.",
    imageUrl:
      "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg",
    tags: "Sandbox, Sobrevivência, Criativo",
  },
  {
    gameName: "Fortnite",
    description:
      "Fortnite é um jogo eletrônico multijogador online revelado originalmente em 2011 e desenvolvido pela Epic Games.",
    imageUrl:
      "https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg",
    tags: "Battle Royale, Ação, Multijogador",
  },
  {
    gameName: "CS2",
    description:
      "Counter-Strike 2 (CS2) é um jogo de tiro em primeira pessoa competitivo desenvolvido e publicado pela Valve.",
    imageUrl:
      "https://media.rawg.io/media/games/ec4/ec4b02bdb3eb5c6212992c19bc05697e.jpg",
    tags: "Ação, FPS, Multijogador",
  },
  {
    gameName: "GTA 5",
    description:
      "Grand Theft Auto V (GTA 5) é um jogo de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games.",
    imageUrl:
      "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    tags: "Ação, Aventura, Mundo Aberto",
  },
  {
    gameName: "Fall Guys",
    description:
      "Fall Guys é um jogo de batalha real multijogador desenvolvido pela Mediatonic e publicado pela Devolver Digital.",
    imageUrl:
      "https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg",
    tags: "Battle Royale, Multijogador, Plataforma",
  },
  {
    gameName: "Rainbow Six Siege",
    description:
      "Tom Clancy's Rainbow Six Siege é um jogo de tiro tático desenvolvido pela Ubisoft Montreal e publicado pela Ubisoft.",
    imageUrl:
      "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg",
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
