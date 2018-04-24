# Projeto usando Angular 4, ES6 e Typescript

Contéudo referente ao curso de Angular4 da [Udemy](https://www.udemy.com/curso-de-desenvolvimento-web-com-es6-typescript-e-angular-4)

---

Gerando um projeto com angular-cli

`ng new <nome_projeto>`

- Dentro da pasta do projeto executar

`npm install`

- build da aplicação

`ng server`

---

- Instalando Bootstrap
npm install bootstrap@4.0.0-alpha.6 --save


- Instalando jQuery
npm install jquery --save

- Instalando Tether
npm install tether --save

Para configurar as dependências dentro do projeto, precisa modificar o `angular-cli.json`

```
"styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "styles.css"
],
```
e

```
"scripts": [
    "../node_modules/tether/dist/js/tether.min.js",
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
],

```

---
