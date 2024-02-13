# EXPRESS PARSE INPUT

Request does not try to parse the incoming request contents.
It is necessary to reqister a parser
Third party required : `npm install --save body-parser`

**Parsing of the body should be done no matter where the request ends up.**

## Routes

Routes are used to keep logic clear and make it readable.
Separate the routes for the different areas of the solution.
Still evaluated top to bottom.

Instead of app.use it its better to use app.get | app.post to diferentiate what the route does. app.use is a catch all.

When creating the routes:

```js
const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => { ... });
router.post('/add-product', (req, res, next) => { ... });

module.exports = router;
```

On the app import the routes:

```js
const adminRoutes = require('./routes/admin')

app.use('/admin', adminRoutes);
```

It is possible to append part of the common path to the routes. As seen on the example above.

## Return Status Code

```js
res.status(404).send('<h1>Page Not found</h1>');
```
