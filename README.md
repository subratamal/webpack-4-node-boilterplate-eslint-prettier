## Webpack 4 Boilerplace with ESLint and Prettier

## Description

Minimal Webpack 4 Boilerplate configuration for `Node.js` projects with some essential tooling setup: `ESLint`, `Prettier` and `Editorconfig`.

> ESLint, Prettier, Editorconfig are opinionated. Change the configurations which works for you.

## Download

```javascript
$ curl -L -o master.zip https://github.com/subratamal/webpack-4-node-boilterplate-eslint-prettier/archive/master.zip && unzip master.zip && rm master.zip && mv ./webpack-4-node-boilterplate-eslint-prettier-master/{.,}* ./ && rm -r ./webpack-4-node-boilterplate-eslint-prettier-master
```
## Setup

#### Install dependencies

```javascript
npm install
```

## Development
Builds the application using `webpack` and `nodemon` to `dist/` folder, executes them and watches for more changes.
```javascript
npm run dev
```

## Deployment

Build the application in `dist/` folder

```javascript
npm run build
```

## Default Configurations

### ESLint

#### `Airbnb`
#### Rules overrides: `no semicolon`, `single quote` & `trailing comma`

### Webpack

#### Node.js version support `v6.0.0+`
