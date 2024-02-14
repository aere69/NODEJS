# NPM PROJECT SAMPLE USING EXPRESS

1. Run `npm init` to setup npm project and initialize package.json
2. Run `npm intall nodemode --save-dev` to install nodemon utility.
3. Run `npm install express --save` to install Express.js
4. Add to "scripts" section of package.json

    ```js
        "start": "nodemon app.js",
        "start-server": "node app.js"
    ```

5. Install Third party -**Parser**- required : `npm install --save body-parser`
6. Add folders :
    - routes
    - views
7. Add HTML file to views folder
8. To call the HTML form the routes :

    ```js
    Add **core feature Path**
    `const path = require('path');`

    In the route instead of res.send use:
    `res.sendfile(path.join(__dirname, '../', 'views', 'filename.html'));`

    using path this way we make sure to keep compatibility with all OSs
    ```

9. Add folders :
    - helpers
    - public\css
10. In helpers create 'rootPath'
11. In css create a main.css file to style the html pages
12. Run the app with `npm start`