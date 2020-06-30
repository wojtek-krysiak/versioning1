const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/hello2', (req, res) => res.send('Hello World 2!'));

app.listen(port, () => console.log(
  `Example app listening at http://127.0.0.1:${port}`,
));
