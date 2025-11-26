# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- HEADER CENTRALIZADO -->

<div align="center">
<h1>🚀 Portfólio Web | Henrique Dominguez</h1>

<p>
Portfólio interativo e responsivo desenvolvido com React, focado em alta performance e código limpo.
</p>

<p>
<a href="https://www.google.com/search?q=https://github.com/Henrique87645/portfolio-henrique/issues">Reportar Bug</a>
·
<a href="https://www.google.com/search?q=https://github.com/Henrique87645/portfolio-henrique/issues">Solicitar Feature</a>
</p>

<!-- BADGES (Links Oficiais e Limpos) -->

<p>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
</p>
</div>

<br />

<!-- ÍNDICE -->

<details>
<summary><strong>Conteúdo</strong> (Clique para expandir)</summary>
<ol>
<li><a href="#-sobre-o-projeto">Sobre o Projeto</a></li>
<li><a href="#-tecnologias-utilizadas">Tecnologias Utilizadas</a></li>
<li><a href="#-como-rodar-o-projeto">Como Rodar</a></li>
<li><a href="#-solução-de-problemas-comuns-troubleshooting">Solução de Problemas</a></li>
<li><a href="#-estrutura-do-projeto">Estrutura</a></li>
<li><a href="#-contato">Contato</a></li>
</ol>
</details>

📋 Sobre o Projeto

Este projeto é uma Single Page Application (SPA) moderna que apresenta meus projetos, habilidades técnicas e contatos. Ele foi construído para demonstrar domínio em tecnologias front-end atuais e boas práticas de arquitetura de código.

✨ Funcionalidades Principais

🌌 Fundo Interativo: Animação de partículas ("Constelação") usando HTML5 Canvas nativo e otimizado.

📱 Design Responsivo: Layout fluido que funciona perfeitamente em Mobile, Tablet e Desktop.

💎 Glassmorphism: UI moderna com efeitos de desfoque e transparência.

⚡ Gestão de Estado: Navegação interna fluida sem recarregamento de página.

📦 Dados Centralizados: Todo o conteúdo (projetos/skills) é gerenciado em um único arquivo JSON-like para fácil manutenção.

🛠️ Tecnologias Utilizadas

<!-- TABELA EM HTML PURO PARA GARANTIR RENDERIZAÇÃO -->

<div align="center">
<table width="100%">
<thead>
<tr>
<th>Tecnologia</th>
<th>Função</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><strong>React.js</strong></td>
<td>Biblioteca principal para construção da UI.</td>
</tr>
<tr>
<td align="center"><strong>Vite</strong></td>
<td>Build tool para desenvolvimento rápido e otimizado.</td>
</tr>
<tr>
<td align="center"><strong>Tailwind CSS</strong></td>
<td>Framework de utilitários CSS para estilização (v3.4).</td>
</tr>
<tr>
<td align="center"><strong>Lucide React</strong></td>
<td>Biblioteca de ícones leves e consistentes.</td>
</tr>
<tr>
<td align="center"><strong>JavaScript (ES6+)</strong></td>
<td>Lógica e interatividade.</td>
</tr>
</tbody>
</table>
</div>

🚀 Como Rodar o Projeto

Pré-requisitos

Antes de começar, você precisa ter o Node.js instalado.

Recomendado: Versão 20.12.0 ou superior.

Clique aqui para baixar o Node.js LTS

Instalação Passo a Passo

Clone o repositório
<pre>git clone https://www.google.com/search?q=https://github.com/Henrique87645/portfolio-henrique.git

cd portfolio-henrique</pre>

Instale as dependências

<pre>npm install</pre>

Inicie o servidor de desenvolvimento

<pre>npm run dev</pre>

Acesse no navegador
O terminal mostrará um link, geralmente http://localhost:5173/.

🔧 Solução de Problemas Comuns (Troubleshooting)

Se você encontrar erros ao rodar o projeto, verifique as soluções abaixo:

1. Erro: Vite requires Node.js version ...

Causa: Sua versão do Node está antiga.
Solução: Atualize para a versão LTS mais recente no site nodejs.org.

2. Erro: PostCSS plugin ... tailwindcss/postcss

Causa: Conflito de versão (Tailwind v4 vs v3).
Solução: Force a instalação da versão estável v3 rodando:

<pre>npm install -D tailwindcss@3.4.16 postcss autoprefixer</pre>

3. Erro: @apply should not be used with the 'group' utility

Causa: O Tailwind não permite usar group dentro do CSS puro (@apply).
Solução: Mova a classe group para o JSX (ex: className="card-project group").

4. Erro: Failed to resolve import ...

Causa: Erro de digitação (ex: portifolio.js vs portfolio.js).
Solução: Verifique se o nome do arquivo na pasta bate exatamente com o import no código.

📂 Estrutura do Projeto

<!-- ESTRUTURA EM HTML PREFORMATADO -->

<pre>
src/
├── components/
│   └── ParticleBackground.jsx  # Animação do fundo (Canvas)
├── data/
│   └── portfolio.js            # ⚡ Edite seus textos e projetos AQUI!
├── assets/                     # Imagens e arquivos estáticos
├── index.css                   # Estilos globais
├── App.jsx                     # Componente principal
└── main.jsx                    # Ponto de entrada React
</pre>

📝 Como Personalizar

Para adicionar um novo projeto ou alterar suas skills, basta editar o arquivo src/data/portfolio.js:

<pre>
export const projects = [
{
title: "Seu Novo Projeto",
description: "Descrição curta...",
tech: ["React", "Node"],
// ...
}
];
</pre>

📬 Contato

<div align="center">

Henrique Dominguez - Desenvolvedor Web Júnior

</div>

<br />

<p align="center">
Desenvolvido com 💙 por Henrique Dominguez
</p>
