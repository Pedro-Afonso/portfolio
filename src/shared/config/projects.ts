/* Icons */
import materialUiIcon from '../assets/icons/materialui.png'
import typescriptIcon from '../assets/icons/typescript.svg'
import reactQueryIcon from '../assets/icons/reactquery.svg'
import rapidApiIcon from '../assets/icons/rapidapi.svg'
import expressIcon from '../assets/icons/express.svg'
import mongoDbIcon from '../assets/icons/mongodb.svg'
import nextjsIcon from '../assets/icons/nextjs.webp'
import socketIcon from '../assets/icons/socket.svg'
import reactIcon from '../assets/icons/react.svg'
import reduxIcon from '../assets/icons/redux.svg'

export interface IProjectData {
  _id: number
  title: string
  techStack: string
  thumbnail: string
  github: string
  url: string
  stack: {
    name: string
    iconUrl: string
  }[]
  secondaryStack: {
    name: string
    iconUrl: string
  }[]
  images: string[][]
  description: string
  objective: string
  presentation: string
}

export const myProjects: IProjectData[] = [
  {
    _id: 0,
    title: 'Random User App',
    techStack: 'React JS, Material UI, Redux Toolkit , Rapid API',
    thumbnail:
      'https://user-images.githubusercontent.com/50973575/214949777-1e0401f7-fe60-49ab-9eee-1aad9fcf6bc3.png',
    github: 'https://www.github.com/pedro-afonso/random-user',
    url: 'https://random-user-sepia.vercel.app',
    stack: [
      {
        name: 'Next',
        iconUrl: nextjsIcon
      },
      {
        name: 'React Query',
        iconUrl: reactQueryIcon
      }
    ],
    secondaryStack: [
      {
        name: 'Typescript',
        iconUrl: typescriptIcon
      }
    ],
    images: [
      [
        'https://user-images.githubusercontent.com/50973575/197407619-036fb486-09f9-4f1a-a14e-a3ca12186b8c.png',
        'https://user-images.githubusercontent.com/50973575/197407625-714e6b20-e095-4da0-917f-a10a07d97924.png',
        'https://user-images.githubusercontent.com/50973575/197407624-0d9a68ee-c27b-43f6-87ba-adc82ad77707.png',
        'https://user-images.githubusercontent.com/50973575/197407622-55a067f6-15e2-40af-be9e-df7d74f78dc5.png',
        'https://user-images.githubusercontent.com/50973575/197407621-a73f3623-2eda-4a5c-8b45-76cb8921e4bb.png'
      ],
      [
        'Listar músicas',
        'Músicas relacionadas',
        'Letra da música',
        'Media Player',
        'Fácil navegação entre as páginas'
      ]
    ],
    description:
      'Este projeto tem o objetivo de facilitar a acesso as músicas mais populares do momento, com filtro de gênero musical e um design amigável, proporcionando uma experiência melhor para o cliente.',
    objective:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, recusandae facere obcaecati unde qui, officiis accusamus modi laborum ducimus error quisquam vero facilis labore amet debitis adipisci necessitatibus, cumque dolorum?',
    presentation:
      'Eu descobri a API shazam core API no youtube e me desafiei criar uma aplicação com as ferramentas que eu conheço'
  },
  {
    _id: 1,
    title: 'Music App',
    techStack: 'React JS, Material UI, Redux Toolkit , Rapid API',
    thumbnail:
      'https://user-images.githubusercontent.com/50973575/197407618-a35bf452-5d24-4988-8a16-30436f313829.png',
    github: 'https://www.github.com/pedro-afonso/micro-spotify',
    url: 'https://pedro-afonso-music-app.netlify.app',
    stack: [
      {
        name: 'React',
        iconUrl: reactIcon
      },
      {
        name: 'Redux',
        iconUrl: reduxIcon
      },
      {
        name: 'Rapid API',
        iconUrl: rapidApiIcon
      }
    ],
    secondaryStack: [
      {
        name: 'Typescript',
        iconUrl: typescriptIcon
      },
      {
        name: 'Material UI',
        iconUrl: materialUiIcon
      }
    ],
    images: [
      [
        'https://user-images.githubusercontent.com/50973575/197407619-036fb486-09f9-4f1a-a14e-a3ca12186b8c.png',
        'https://user-images.githubusercontent.com/50973575/197407625-714e6b20-e095-4da0-917f-a10a07d97924.png',
        'https://user-images.githubusercontent.com/50973575/197407624-0d9a68ee-c27b-43f6-87ba-adc82ad77707.png',
        'https://user-images.githubusercontent.com/50973575/197407622-55a067f6-15e2-40af-be9e-df7d74f78dc5.png',
        'https://user-images.githubusercontent.com/50973575/197407621-a73f3623-2eda-4a5c-8b45-76cb8921e4bb.png'
      ],
      [
        'Listar músicas',
        'Músicas relacionadas',
        'Letra da música',
        'Media Player',
        'Fácil navegação entre as páginas'
      ]
    ],
    description:
      'Este projeto tem o objetivo de facilitar a acesso as músicas mais populares do momento, com filtro de gênero musical e um design amigável, proporcionando uma experiência melhor para o cliente.',
    objective:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, recusandae facere obcaecati unde qui, officiis accusamus modi laborum ducimus error quisquam vero facilis labore amet debitis adipisci necessitatibus, cumque dolorum?',
    presentation:
      'Eu descobri a API shazam core API no youtube e me desafiei criar uma aplicação com as ferramentas que eu conheço'
  },
  {
    _id: 2,
    title: 'Realtime Chat App',
    thumbnail:
      'https://user-images.githubusercontent.com/50973575/203847038-ed899369-fc18-4ca2-96c8-aa8313484c6e.png',
    techStack:
      'React JS, Material UI, Redux Toolkit, Express, MongoDB, Socket.IO',
    github: 'https://www.github.com/pedro-afonso/chat-app-frontend',
    url: 'https://pedro-afonso-chat-app.netlify.app',
    stack: [
      {
        name: 'React',
        iconUrl: reactIcon
      },
      {
        name: 'Redux',
        iconUrl: reduxIcon
      },
      {
        name: 'Express',
        iconUrl: expressIcon
      },
      {
        name: 'Mongo DB',
        iconUrl: mongoDbIcon
      }
    ],
    secondaryStack: [
      {
        name: 'Typescript',
        iconUrl: typescriptIcon
      },
      {
        name: 'Material UI',
        iconUrl: materialUiIcon
      },
      {
        name: 'Socket.IO',
        iconUrl: socketIcon
      }
    ],
    images: [
      [
        'https://user-images.githubusercontent.com/50973575/206700865-69288e42-a041-4dd6-9b34-c1a7539a2c1d.png',
        'https://user-images.githubusercontent.com/50973575/203847041-ed238bec-9717-450b-b551-53d8862151b8.png',
        'https://user-images.githubusercontent.com/50973575/203847044-780f0526-3c45-4ae0-a575-0c1eda4c6c28.png',
        'https://user-images.githubusercontent.com/50973575/203847040-7394e32d-6ba9-4e48-968a-0f4930cdaa25.png',
        'https://user-images.githubusercontent.com/50973575/203847033-928cd84a-2301-4d81-9ffd-b0adcc293e8b.png',
        'https://user-images.githubusercontent.com/50973575/203847037-3c88cd19-fb3b-42ff-a046-b9d274c42b20.png'
      ],
      [
        'Indicador de digitação e notificações',
        'Criar chat em grupo',
        'Pesquisar usuários',
        'Listar chats um para um e em grupo',
        'Editar grupo',
        'Criar conta e adicionar foto'
      ]
    ],
    description:
      'Este projeto tem o objetivo de facilitar a comunicação em tempo real através de chats um para um e chat em grupo, proporcionando uma experiência melhor para o usuário.',
    objective: 'Eu fiz esse projeto esse é o meu primeiro contato o Socket.IO',
    presentation:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, recusandae facere obcaecati unde qui, officiis accusamus modi laborum ducimus error quisquam vero facilis labore amet debitis adipisci necessitatibus, cumque dolorum?'
  },
  {
    _id: 3,
    title: 'Reactgram',
    thumbnail:
      'https://user-images.githubusercontent.com/50973575/210013295-678b9482-f4e8-4cee-9b62-4891876b64d3.png',
    techStack: 'React JS, Material UI, Redux Toolkit, Express, MongoDB',
    github: 'https://www.github.com/pedro-afonso/reactgram-frontend',
    url: 'https://reactgram-frontend.vercel.app',
    stack: [
      {
        name: 'React',
        iconUrl: reactIcon
      },
      {
        name: 'Redux',
        iconUrl: reduxIcon
      },
      {
        name: 'Express',
        iconUrl: expressIcon
      },
      {
        name: 'Mongo DB',
        iconUrl: mongoDbIcon
      }
    ],
    secondaryStack: [
      {
        name: 'Typescript',
        iconUrl: typescriptIcon
      },
      {
        name: 'Material UI',
        iconUrl: materialUiIcon
      }
    ],
    images: [
      [
        'https://user-images.githubusercontent.com/50973575/209987223-1c950956-83d7-4939-b555-16ce82359172.png',
        'https://user-images.githubusercontent.com/50973575/209987853-90c697bc-0b16-49e2-8efb-fa3fdadf6288.png',
        'https://user-images.githubusercontent.com/50973575/209987808-d8e6cae7-fc0e-47a5-a5bf-a9175a02f367.png',
        'https://user-images.githubusercontent.com/50973575/209987893-a74f484c-3685-47f6-abdd-3a5ebd5f1d02.png',
        'https://user-images.githubusercontent.com/50973575/209987245-f52a4889-f000-4881-a241-50d46920bc7d.png',
        'https://user-images.githubusercontent.com/50973575/209988297-78fd6eda-2df0-4a69-8380-136f606c139f.png'
      ],
      [
        'Feed na página incial',
        'Galeria de fotos',
        'Adicionar/editar/excluir foto',
        'Pesquisar foto',
        'Editar dados do usuário',
        'Curtir/comentar foto'
      ]
    ],

    description:
      'Inspirado no Instagram, este projeto tem o objetivo de compartilhar fotos especiais. As atualizações são exibidas na página inicial para que todos possam visualizar.',
    objective:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, recusandae facere obcaecati unde qui, officiis accusamus modi laborum ducimus error quisquam vero facilis labore amet debitis adipisci necessitatibus, cumque dolorum?',
    presentation:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, recusandae facere obcaecati unde qui, officiis accusamus modi laborum ducimus error quisquam vero facilis labore amet debitis adipisci necessitatibus, cumque dolorum?'
  }
]
