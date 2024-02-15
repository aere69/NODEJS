# DYNAMIC DATA

Usin this approach is risky because data is stored on the server and will be shared across all calls even from different browsers.

In **Product - route**

```js
const router = express.Router();

const products = [];

// router logic ....

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
```

In **Shop - route**

```js
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  console.log('shop.js', adminData.products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});
```

In **app**

```js
const adminData = require('./routes/admin');

app.use('/admin', adminData.routes);
```
