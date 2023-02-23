const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");
const postList = require('./views/postList');
const html = require("html-template-tag");
const postDetails = require('./views/postDetails');

const app = express();

app.use(morgan("dev"));
app.use(express.static('public'))

app.get("/", (req, res) => {
  const posts = postBank.list();
  res.send(postList(posts));
});

app.get('/posts/:id', (req, res) => {
  const post = postBank.find(req.params.id);
  res.send(postDetails(post));
});

app.use((err, req, res, next) => {
  const htmlString = html`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Wizard News</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="news-list">
        <header><img src="/logo.png"/>Wizard News</header>
        <div class="not-found">
          <p>404: Page Not Found</p>
        </div>
      </div>
    </body>
    </html>`
  res.status(404).send(htmlString)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
