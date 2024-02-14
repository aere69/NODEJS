# NPM PROJECT SAMPLE USING EXPRESS

1. Run `npm init` to setup npm project and initialize package.json
2. Run `npm intall nodemode --save-dev` to install nodemon utility.
3. Run `npm install express --save` to install Express.js
4. Add to "scripts" section of package.json

    ```js
        "start": "nodemon app.js",
        "start-server": "node app.js"
    ```

5. Create app.js file and add two middleware functions to handle requests to **"/"** and **"/user-list"** separately.
6. Run the app with `npm start`
