# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


🚀 Portfólio Web | Henrique Dominguez

Portfólio interativo e responsivo desenvolvido com React, focado em alta performance e código limpo.

📋 Sobre o Projeto

Este projeto é uma Single Page Application (SPA) moderna que apresenta meus projetos, habilidades técnicas e contatos. Ele foi construído para demonstrar domínio em tecnologias front-end atuais e boas práticas de arquitetura de código.

✨ Funcionalidades Principais

Fundo Interativo: Animação de partículas ("Constelação") usando HTML5 Canvas nativo e otimizado.

Design Responsivo: Layout fluido que funciona em Mobile, Tablet e Desktop.

Glassmorphism: UI moderna com efeitos de desfoque e transparência.

Gestão de Estado: Navegação interna fluida sem recarregamento de página.

Dados Centralizados: Todo o conteúdo (projetos/skills) é gerenciado em um único arquivo JSON-like para fácil manutenção.

🛠️ Tecnologias Utilizadas

React.js: Biblioteca principal para construção da UI.

Vite: Build tool para desenvolvimento rápido e otimizado.

Tailwind CSS (v3.4): Framework de utilitários CSS para estilização.

Lucide React: Biblioteca de ícones leves e consistentes.

JavaScript (ES6+): Lógica e interatividade.

🚀 Como Rodar o Projeto

Pré-requisitos

Antes de começar, você precisa ter o Node.js instalado.
Recomendado: Versão 20.12.0 ou superior (Vite exige versões recentes).
Baixe aqui o Node.js LTS

Instalação Passo a Passo

Clone o repositório:

git clone [https://github.com/Henrique87645/portfolio-henrique.git](https://github.com/Henrique87645/portfolio-henrique.git)
cd portfolio-henrique


Instale as dependências:

npm install


Inicie o servidor de desenvolvimento:

npm run dev


Acesse no navegador:
O terminal mostrará um link, geralmente http://localhost:5173/.

🔧 Solução de Problemas Comuns (Troubleshooting)

Se você encontrar erros ao rodar o projeto, verifique as soluções abaixo baseadas em problemas conhecidos:

1. Erro: Vite requires Node.js version ...

Se o terminal exibir um erro pedindo Node.js 20.19+ ou 22.12+:

Causa: Sua versão do Node está antiga para o Vite atual.

Solução: Baixe e instale a versão LTS mais recente no site nodejs.org. Reinicie o VS Code após instalar.

2. Erro: PostCSS plugin ... tailwindcss/postcss

Se aparecer um erro vermelho gigante sobre PostCSS ou Tailwind v4:

Causa: Pode haver uma instalação de versão beta do Tailwind incompatível.

Solução: Force a instalação da versão estável v3:

npm install -D tailwindcss@3.4.16 postcss autoprefixer


3. Erro: @apply should not be used with the 'group' utility

Se o build falhar devido à classe group no CSS:

Causa: O Tailwind não permite usar group dentro de arquivos CSS (@apply).

Solução: Mova a classe group do arquivo index.css diretamente para a tag HTML/JSX no componente (ex: className="card-project group ...").

4. Erro: Failed to resolve import ...

Se o Vite não encontrar arquivos como ./data/portfolio:

Causa: Erro de digitação no nome do arquivo (ex: portifolio.js vs portfolio.js).

Solução: Verifique se o nome do arquivo na pasta bate exatamente com o nome no import do App.jsx.

📂 Estrutura do Projeto

src/
├── components/
│   └── ParticleBackground.jsx  # Animação do fundo (Canvas)
├── data/
│   └── portfolio.js            # Onde ficam os textos e projetos (Edite aqui!)
├── assets/                     # Imagens e arquivos estáticos
├── index.css                   # Estilos globais e diretivas Tailwind
├── App.jsx                     # Componente principal
└── main.jsx                    # Ponto de entrada React


📝 Como Personalizar

Para adicionar um novo projeto ou alterar suas skills, você não precisa mexer no código complexo. Basta editar o arquivo:

src/data/portfolio.js

export const projects = [
  {
    title: "Seu Novo Projeto",
    description: "Descrição curta...",
    tech: ["React", "Node"],
    // ...
  }
];


📬 Contato

Henrique Dominguez Desenvolvedor Web Júnior

<p align="center">Desenvolvido com 💙 por Henrique Dominguez</p>