# App2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


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
