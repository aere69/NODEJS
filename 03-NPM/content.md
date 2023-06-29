# NPM

NPM is a package manager for JavaScript.

use `npm init` to setup a package for the project.

on the script section add:

```text
"start": "node sever.js"
"start-server": "node server.js"
```

+ `npm start` - will run the server.
+ `npm run start-server` - will run the server also (custom script).

---

**NPM** is used to install third party packages; the packages are available in the npm repository.

```bash
npm install
```

will install all modules and dependencies in *package.json* file.

---

## Packages

+ **Nodemon** : When changes are made on the code, no need to stop & restart the server.
This package is a development dependency, not needed once on production.

  + For development environment

    ```bash
    npm install nodemon --save-dev
    ```

  + For production environment

    ```bash
    npm install nodemon --save
    ```

  + Globally on machine

    ```bash
    npm install nodemon -g
    ```

  The command will add the package to the *package.json* file or create it.

  Will also add *node_modules* folder. The folder can be deleted to make space. When `npm install` runs again it will be recreated.
