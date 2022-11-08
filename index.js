const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, 'public');
const app = express();

app.get('/', (req, res) => res.sendFile(`${publicPath}/index.html`));
app.get('/about', (req, res) => res.sendFile(`${publicPath}/about.html`));
app.get('/project/:name', (req, res) =>
  res.sendFile(`${publicPath}/project.html`),
);

app.use('/static', express.static(path.join(__dirname, 'public/static')));

app.get('*', (req, res) => res.redirect('/'));

app.listen(3000);
