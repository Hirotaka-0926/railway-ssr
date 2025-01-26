import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";

const app = express();
const PORT = 9000;

// 静的ファイルの提供
app.use(express.static("dist"));

// サーバーサイドレンダリング
app.get("*", (req, res) => {
  const appHtml = renderToString(React.createElement(App));
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SSR App</title>
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script src="/client.js"></script>
    </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
