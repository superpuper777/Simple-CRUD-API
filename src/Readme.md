# Simple-CRUD-API

## Clone:

```console
$ git clone https://github.com/superpuper777/Simple-CRUD-API.git
$ cd Simple-CRUD-API
```

## Installation:

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install
```

## Start the server:

```console
$ npm run start:dev
```

View the website at: http://localhost:PORT

### MY rating - 112 points

Feedback on the points of the Terms of Reference:

#### Items not completed / not counted:

- [ ] Production mode: `npm` script `start:prod` implemented properly
- [ ] There are tests for API (not less than **3** scenarios)
- [ ] There is horizontal scaling for application with a **load balancer**

#### Completed items:

- [x] The repository with the application contains a `Readme.md` file containing detailed instructions for installing, running and using the application
- [x] **GET** `api/users` implemented properly
- [x] **GET** `api/users/${userId}` implemented properly
- [x] **POST** `api/users` implemented properly
- [x] **PUT** `api/users/{userId}` implemented properly
- [x] **DELETE** `api/users/${userId}` implemented properly
- [x] Users are stored in the form described in the technical requirements
- [x] Value of `port` on which application is running is stored in `.env` file
- [x] Task implemented on Typescript
- [x] Processing of requests to non-existing endpoints implemented properly
- [x] Errors on the server side that occur during the processing of a request should be handled and processed properly
- [x] Development mode: `npm` script `start:dev` implemented properly
      Penalties:
- [x] Less than 3 commits in the development branch, not including commits that make changes only to `Readme.md` or similar files (`tsconfig.json`, `.gitignore`, `.prettierrc.json`, etc.)
