# Folks

Inspirado no Discord, Folks é uma plataforma social inovadora projetada para gamers, oferecendo funcionalidades avançadas de comunicação e descoberta de novos jogos. Este projeto foi desenvolvido utilizando o framework Next.js.

## Recursos Principais

1. **Chat em Tempo Real:** Comunique-se com amigos e comunidades através de mensagens instantâneas. A interação é fluida e intuitiva, proporcionando uma experiência de conversa agradável.

2. **Chamadas de Voz e Vídeo:** Estabeleça conexões mais profundas com chamadas de voz e vídeo de alta definição. Seja para conversas a dois ou em grupos, a qualidade de som e imagem é excepcional.

3. **Gerenciamento de Servidores e Canais:** Organize suas comunidades com facilidade, criando e administrando servidores e canais. Controle o acesso e as funções dos membros para uma gestão eficaz.

4. **Mensagens Diretas:** Interaja diretamente com os membros do servidor. Inicie chamadas de áudio ou vídeo privadas com apenas um clique.

5. **Suporte a Mídias:** Enriqueça suas conversas compartilhando uma variedade de conteúdos multimídia, como imagens e PDFs.

6. **Emojis:** Dê vida às suas mensagens com uma extensa seleção de emojis.

## Tecnologias Utilizadas

- **Frontend:**
  - [Next.js](https://nextjs.org)
  - [React.js](https://react.dev)
  - [Tailwind CSS](https://tailwindcss.com)
  - [ClerkJS (Autenticação)](https://clerk.com)
  - [LiveKit (Chamadas de Áudio Vídeo)](https://livekit.io)
  - [UploadThing (Upload de Mídias)](https://uploadthing.com/dashboard)
  - [Emoji-mart (Emojis)](https://www.npmjs.com/package/emoji-mart)
  - [Zustand (Gerenciamento de Estado)](https://www.npmjs.com/package/zustand)
  - [Zod (Manipulação de Formulários)](https://www.npmjs.com/package/zod)
  - [Radix UI](https://www.radix-ui.com)
  - [Lucide React](https://lucide.dev/guide/packages/lucide-react)
  - [Axios](https://www.npmjs.com/package/axios)
  - [React Query](https://www.npmjs.com/package/@tanstack/react-query)
  - [TypeScript](https://www.typescriptlang.org)

- **Backend:**
  - [Node.js](https://nodejs.org) 
  - [Socket.IO](https://socket.io)
  - [MongoDB](https://www.mongodb.com)

## Configuração para Desenvolvimento Local

### Fork do Repositório

Inicie contribuindo com um fork do repositório Folks disponível em: [Folks](https://github.com/enzocandido/folks).

### Clone o Repositório

1. Clone o repositório:

   ```sh
   git clone https://github.com/enzocandido/folks
   ```

2. Navegue até o diretório do projeto:
   ```sh
   cd folks
   ```

### Instalação das Dependências

1. Instale as dependências na raiz do repositório:

   ```sh
   npm install
   ```

2. Altere o arquivo `.env.local.example` para `.env`

### Configure as Variáveis de Ambiente

1. Abra o arquivo .env na raiz do projeto.
2. Crie um banco de dados [MongoDB](https://www.mongodb.com) e obtenha a chave.
3. Obtenha as chaves de API necessárias dos serviços [UploadThing](https://uploadthing.com/dashboard), [ClerkJS](https://clerk.com/docs/references/javascript/overview) e [LiveKit](https://livekit.io/).
4. Preencha as variáveis de ambiente com as chaves obtidas.
5. Mantenha as demais configurações padrão.

### Execução Local

```sh
npm run dev # inicia todas as aplicações
```

Acesse [http://localhost:3000/](http://localhost:3000/) para visualizar o projeto.

## Documentação das Rotas

### Principais Rotas

- **/auth:** Utilize esta rota para autenticação segura através do ClerkJs, garantindo que apenas membros autorizados tenham acesso.
- **/invite:** Envie convites para participar de servidores existentes, facilitando a expansão da sua comunidade.
- **/main:** Acesso centralizado às páginas principais do servidor, canais e conversas privadas.
  - **/servers/{serverId}:** Acesso a um servidor específico.
    - **/channels/{channelId}:** Entrar em um canal de servidor.
  - **/conversations/{memberId}:** Iniciar conversas privadas com membros do servidor.
- **/setup:** Modal inicial para criação de um servidor.
- **/api:** Rota dedicada à manipulação de API.
</a>

