# Opply Technical assignment

## Notes

### Possible improvements

- No tests have been created, unit, integration and E2E tests should be added
- Styles: imported bootstrap from CDN and the minimum has been done to give a basic nice look and feel. Style could be greatly improved
- Responsivity: the app is not optimised for smaller devices, especially navigation should be improved
- Security: token is stored in local storage, this make the app vulnerable to xss attacks, http-only cookie would be the best approach
- Error handling: a 404 page could be created, form errors could be handled with a UI feedback
- Accessibility: aria tags should be added for best accessibility
- State management: a very basic state management is achieved by using composition API
- Pagination: not a requirement but I used `v-pagination-3` to quickly create a pagination for quotes and suppliers

### Highlights

- Swagger generated JSON is used to create typescript types
- Is possible to generate types by running `npm run generate-schema` (a swagger.json file must be located in the project root)
- A route-based pagination has been added

### Components Structure

The application follows a standard components structure:
- The “views” directory contain routes entry points
- The “components” directory contains lower-level components like forms, navigation etc..


## Basic Setup Information

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

