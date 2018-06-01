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

### Modificar o arquivo `angular-cli.json` para usar as dependências do `Tether`, `jQuery` e `Bootstrap`

Na versão nova dp Bootstrap, o `Tether` foi substituido pelo `popper.js`

```
"styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.min.css",
  "styles.css"
],
"scripts": [
      "../node_modules/tether/dist/js/tether.min.js",
      "../node_modules/popper.js/dist/umd/popper.min.js",
      "../node_modules/jquery/dist/jquery.min.js",
      "../node_modules/bootstrap/dist/js/bootstrap.min.js"
    ],
```

---

### JSON-Server

Criar uma API Fake

- Instalar o pacote

```
npm install -g json-server
```

- Build do server com as informações fake ()

```
json-server --watch banco_de_dados.json
```

Subirá um server na porta 3000 e ficará escutando o arquivo json

---

### Ajustando a formatação de moedas para o padrão brasileiro

```
npm install --save intl
```

- Adicionar imports no polyfills

```
import 'intl'
import 'intl/locale-data/jsonp/pt-Br';
```

- Adicionar o LOCALE_ID no módulo do projeto e adicionar os parâmetros nos providers

```
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);
...

providers: [ {provide: LOCALE_ID, useValue: 'pt-Br'} ]

```

---
