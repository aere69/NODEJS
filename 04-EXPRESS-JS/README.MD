# EXPRESS.JS

Express.js is used to avoid having to code all the server logic and allows to focus on Business Logic.

Uses a framework to do the heavy lifting

```text
Framework : Helper functions, tools & rules that help build an application
```

+ Uses Middleware.
+ Elegantly work with Requests and Responses.
+ Helps with Routing.
+ Return HTML pages to the client.
+ Hihgly extensible.

---
### Install express.js

`npm install --save express`

```text
Use --save because it is a production dependency. It is integral to de application, not a tool during development.
```
---
### Start the server in app.js

`app.listen(3000)`

```text
Import no longer required:
    const http = require('http');
    
replaces :
    const server = http.createServer(app);
    server.listen(3000);
```
