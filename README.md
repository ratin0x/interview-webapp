# interview-webapp

## Before You Start
This project supplies an `.nvmrc` file for use with [Node Version Manager](https://github.com/creationix/nvm)

```
nvm use
```

will ensure you are using the correct versions of NodeJS and NPM.

## Project setup
```
npm install
```

### Environment

This project requires a number of environment variables that can be set directly or supplied via an `.env` file in the root of the project.

Sample `.env` file configuration:
```
VUE_APP_AUTH_HOST=http://localhost
VUE_APP_AUTH_PORT=3333
VUE_APP_AUTH_ENDPOINT='/login'
VUE_APP_AUTH_SECRET=development
```

### Compiles and hot-reloads for development
```
npm run serve
```

The development server will be available at [http://localhost:8080](http://localhost:8080)

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run unit tests
```
npm run test:unit
```
