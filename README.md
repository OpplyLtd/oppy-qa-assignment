# Opply Technical assignment

We would like to build a web UI for our platform. Our backend is ready and API specs are available here: https://february-21.herokuapp.com/swagger/

# Requirements

1. Implement authentication UI. You may use `POST /api/v1/users/` endpoint to create new users and `POST /api-token-auth/` to get the authentication token.
2. Build a UI that allows seeing the list of available suppliers.
3. Build a UI where we can see details of the specific supplier.
4. Build a UI where we can see the created quotes.
5. Upload your code to github. Please make the repository public or provide access to the private repository to `martinOpply` (same on all platforms).
6. Deploy your code somewhere so that it is possible to review how it works.

# Shortcuts

We expect that the technical assignment takes under 4 hours. If you believe that it requires more time, there's a couple of shortcuts available:

1. You may avoid building signup if you use `username:password` user which is already in the system
2. You could also avoid handling the token retrieval by using the existing token `d0932c14d763289c638c53e879749299a670fdc7`
3. If you're not sure where/how to deploy your solution, you may try using Netlify as it's rather straightforward there. Or just share the repo with the code.
This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
