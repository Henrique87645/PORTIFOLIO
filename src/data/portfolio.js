import { Globe, Code2, Cpu, Server, Terminal, Database, Layers } from 'lucide-react';

export const skills = [
  { name: 'HTML5/CSS3', icon: Globe, category: 'Frontend' },
  { name: 'JavaScript (ES6+)', icon: Code2, category: 'Frontend' },
  { name: 'React.js', icon: Cpu, category: 'Frontend' },
  { name: 'Node.js', icon: Server, category: 'Backend' },
  { name: 'C# / .NET', icon: Terminal, category: 'Backend' },
  { name: 'SQL Server', icon: Database, category: 'Database' },
  { name: 'Git/GitHub', icon: Code2, category: 'Tools' },
  { name: 'MVC Architecture', icon: Layers, category: 'Concepts' },
];

export const projects = [
  {
    id: 1,
    title: 'Sistema de Produtos',
    tech: ['C#', 'SQL Server', 'MVC', '.NET'],
    // Image: Produto,
    description: 'Sistema gerenciador de estoque com CRUD completo.',
    longDescription: 'Este projeto foi desenvolvido para resolver a necessidade de controle de estoque eficiente. O foco principal foi implementar a arquitetura MVC (Model-View-Controller) para garantir um código limpo e escalável. O sistema permite o gerenciamento completo de produtos, categorias e fornecedores.',
    features: [
      'CRUD completo de produtos',
      'Integração direta com SQL Server via ADO.NET/Entity Framework',
      'Validação de dados no servidor e no cliente',
      'Interface amigável usando Razor Pages'
    ],
    github: 'https://github.com/Henrique87645/Eixo-Z',
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/20'
  },
  {
    id: 2,
    title: 'Cadastro com API',
    tech: ['HTML', 'CSS', 'JavaScript', 'API REST'],
    description: 'Aplicação Full Stack para cadastro e listagem de itens.',
    longDescription: 'Uma aplicação web focada na comunicação assíncrona. O desafio aqui foi criar uma interface responsiva que consome uma API REST externa para listar, adicionar e remover itens sem recarregar a página, proporcionando uma experiência de usuário fluida (SPA).',
    features: [
      'Consumo de API REST (GET, POST, DELETE)',
      'Manipulação dinâmica do DOM com JavaScript Puro',
      'Feedback visual de carregamento (Loaders)',
      'Design Responsivo Mobile-First'
    ],
    github: 'https://github.com/Henrique87645/Biblioteca-api',
    color: 'border-yellow-500',
    bgColor: 'bg-yellow-500/20'
  },
  {
    id: 3,
    title: 'Landing Pages Responsivas',
    tech: ['HTML5', 'CSS3', 'Responsive Design'],
    description: 'Coleção de layouts focados em mobile-first e UI moderna.',
    longDescription: 'Conjunto de páginas desenvolvidas com foco total em semântica HTML e CSS moderno (Flexbox e Grid). O objetivo foi criar layouts que se adaptam perfeitamente a qualquer tamanho de tela, garantindo acessibilidade e alta performance.',
    features: [
      'Layouts Flexbox e CSS Grid',
      'Formulários estilizados e acessíveis',
      'Animações CSS suaves',
      'Menu responsivo (Hambúrguer)'
    ],
    github: 'https://github.com/Henrique87645/ArqNote',
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/20'
  },
  {
    id: 4,
    title: 'Sistema Farmácia POO',
    tech: ['C#', 'POO', 'Lógica'],
    description: 'Aplicação backend com conceitos sólidos de OO.',
    longDescription: 'Projeto focado na estrutura e lógica de programação. Aqui, a interface gráfica é secundária; o protagonista é a modelagem de classes. Utilizei herança, polimorfismo e encapsulamento para criar um sistema robusto de gestão farmacêutica.',
    features: [
      'Modelagem de Classes Complexa',
      'Implementação de Herança e Interfaces',
      'Tratamento de Exceções customizado',
      'Persistência de dados em memória/arquivo'
    ],
    github: 'https://github.com/Henrique87645/FarmaciaPOO',
    color: 'border-green-500',
    bgColor: 'bg-green-500/20'
  }
];