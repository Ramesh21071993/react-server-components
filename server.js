import http from 'http';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './client/App.jsx'; // transpiling with babel is required

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>React SSR with Client-Side Hydration</title>
      </head>
      <body>
        <div id="root">${renderToString(React.createElement(App))}</div>
        <script src="/client.js"></script>
      </body>
    </html>
    `);
}).listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}/`);
});