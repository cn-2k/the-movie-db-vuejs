<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->
<div align="center">

# `The Movie Database - Vue.js`
</div>
<br />
<div align="center">
  <a>
    <img alt="Vue.js" src="https://i.imgur.com/ixyunCt.png" />
  <a/>
</div>
<br />
<div align="center">
  <a>
    <img alt="Vue.js" src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" />
  <a/>
    <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
</div>

## Sobre o Projeto

A aplicação consome a API oficial do The Movie DB e exibe em tela uma lista de filmes populares, onde o usuário pode favoritar/desfavoritar filmes e visualizar mais informações sobre algum filme selecionado. Além disso, todos os favoritos são salvos no Local Storage do navegador, fazendo que caso o usuário saia da aplicação ou feche o navegador, não perca seus favoritos.

Demo: https://the-movie-db-vuejs.vercel.app/#/

## Tecnologias

<table>
  <tbody>
    <tr>
    <tr>
      <td style="font-weight: bold">front-end</td>
      <td>
        <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"><code>Vuejs</code></a> -
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><code>TypeScript</code></a> -
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"><code>TailwindCSS</code></a> -
        <a href="https://axios-http.com/ptbr/" target="_blank" rel="noopener noreferrer"><code>Axios</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Instalação e Configurações 

### Requisitos

Necessário realizar as instalações:

- [`Git`](https://git-scm.com/)
- [`yarn`](https://yarnpkg.com/)
- [`Node`](https://nodejs.org/)

### Clonar repositório

```bash
# Execute o comando git clone para realizar o clone do repositório
$ git clone https://github.com/cn-2k/the-movie-db-vuejs
# Entre na pasta do repositório clonado
$ cd the-movie-db-vuejs
```

### Comandos importantes

```bash
# instalar dependências
$ yarn install
# iniciar servidor
$ yarn dev
```

### Variáveis ambiente (.env)

Na raíz do projeto, altere o nome da variável .env.example para .env e insira sua chave de API do The Movie DB (pode ser obtida no site oficial).
