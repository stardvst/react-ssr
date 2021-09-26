const express = require('express');

const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./components/Home').default;

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
