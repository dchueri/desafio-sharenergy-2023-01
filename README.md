# Sharenergy Challenge
![Badge In Development](http://img.shields.io/static/v1?label=STATUS&message=IN%20DEVELOPMENT&color=blue&style=for-the-badge)  ![Badge Versão](https://img.shields.io/badge/VERSION-1.0.0-blue?style=for-the-badge)

## Index

* [Descrição](#descrição)
* [Iniciando](#iniciando)
	* [Preparando o ambiente](#preparando-ambiente)
* [Tecnologias](#tecnologias)
* [Autor](#autor)

## Descrição

Construir uma aplicação web (frontend e backend) capaz de realizar a comunicação com APIs distintas, além de um CRUD.

- A página inicial da aplicação deve ser uma `Login Page`;
- O usuário deve ser capaz de se autenticar utilizando o username `desafiosharenergy` e password `sh@r3n3rgy`, também, deve existir a possibilidade do usuário utilizar o `remember me` para realizar logins automáticos, sem a necessidade de digitar username e password após o primeiro acesso;
- Após o Login, a página principal deve conter uma listagem de usuários gerada a partir da api [Random User Generator](https://randomuser.me/), a lista deve conter a foto do usuário, nome completo, email, username e idade. Além disso, os requests devem ser páginados, porém, é de critério do participante do desafio a quantidade de resultados a serem exibidos por página e variações para o mesmo. Também, deve haver uma search para buscar usuários por nome, email ou username;
- Em uma segunda página, o usuário deve ser capaz de selecionar um status code http qualquer, e, após a seleção, deve ser retornada uma imagem da api [HTTP Cat](https://http.cat/) relacionada ao status escolhido, caso não exista tal imagem, deve ser retornada uma imagem de not found à critério de escolha do participante do desafio;
- Em uma terceira página, deve haver um botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api [Random Dog](https://random.dog/);
- Em uma quarta página, deve haver uma lista de clientes, através da qual o usuário deve ser capaz de cadastrar novos clientes, visualizar informações de um cliente específico, atualizar um cliente e deletar clientes. O cadastro deve possuir nome, email, telefone, endereço e cpf.

## Iniciando

### Preparando o ambiente
Clone o repositório:

    git clone https://github.com/dchueri/desafio-sharenergy-2023-01.git

Iniciando o back-end:

    cd desafio-sharenergy-2023-01/apps/server
    yarn
    yarn start:dev

Iniciando o front-end:

    cd desafio-sharenergy-2023-01/apps/web
    yarn
    yarn dev

## Tecnologias

* `TypeScript`
* `NestJS`
* `ReactJS`
* `MongoDB`
* `TailwindCSS`
* `MaterialUI`

## Autor

| [<img src="https://avatars.githubusercontent.com/u/84249430?s=400&u=b789830e57ccc23a4d4d758542785461dd656b5f&v=4" width=115><br><sub>Diego  Chueri</sub>](https://github.com/dchueri) | 
| :---: |
