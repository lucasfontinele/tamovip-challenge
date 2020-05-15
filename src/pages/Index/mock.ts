import { Categories } from './CategoryCard';

const categories: Categories[] = [
  {
    id: 1,
    name: 'Esportes',
    description: 'Atletas famosos',
    image:
      'https://images.vexels.com/media/users/3/139594/isolated/preview/c56bdcd971c348a97de9d59a7cac8f92-atleta-correndo-by-vexels.png',
    celebrities: [
      {
        id: 1,
        name: 'Gabriel Guimarães',
        description: 'Digite as instruções do seu vídeo com os nomes',
        price: 20,
        image:
          'https://tamovip.com.br/wp-content/uploads/2020/05/Gabriel-247x296.png',
      },
      {
        id: 2,
        name: 'Julio Cesar',
        description: 'Goleiro do Red Bull Bragantino.',
        price: 100,
        image:
          'https://tamovip.com.br/wp-content/uploads/2020/05/Julio-510x502.jpeg',
      },
    ],
  },
  {
    id: 2,
    name: 'Música',
    description: 'Músicos famosos',
    image:
      'https://images.vexels.com/media/users/3/130740/isolated/preview/579f69f3cf2dfe32a0a41803d3e8a5f8-silhueta-de-m-sico-guitarrista-2-by-vexels.png',
    celebrities: [
      {
        id: 1,
        name: 'Raphael Lima',
        description: 'Digite as instruções do seu vídeo com os nomes',
        price: 80,
        image:
          'https://tamovip.com.br/wp-content/uploads/2020/05/f9fc82b2-4699-419a-bfaa-074a47e0dfb4-foto-0F342209-C113-4F19-83C0-9318D90D23BA-247x296.jpeg',
      },
      {
        id: 2,
        name: 'Digão Raimundos',
        description:
          'Eai, galera! Aqui quem fala é o Digão Raimundos e tô esperando seu pedido!',
        price: 100,
        image:
          'https://tamovip.com.br/wp-content/uploads/2020/05/Captura-de-Tela-2020-05-12-a%CC%80s-17.19.58-1-510x577.png',
      },
      {
        id: 3,
        name: 'Japinha',
        description:
          'Sou o Japinha, baterista do CPM 22 e vocalista do Dinossaurus',
        price: 100,
        image:
          'https://tamovip.com.br/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-06-at-02.20.16-510x340.jpeg',
      },
    ],
  },
  {
    id: 3,
    name: 'Influencers',
    description: 'Principais influencers',
    image:
      'https://w0.pngwave.com/png/300/46/influencer-marketing-social-media-advertising-brand-social-media-png-clip-art.png',
    celebrities: [],
  },
];

export default categories;
