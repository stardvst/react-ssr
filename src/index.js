import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './components/Home';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  const html = `
  <html>
    <head></head>
    <body>
      <div id="root">
        ${content}
      </div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
