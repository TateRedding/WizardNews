const html = require("html-template-tag");

const postDetails = (post) => {
    if (!post.id) {
        throw new Error("Not Found");
    }
    return (html`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Wizard News</title>
            <link rel="stylesheet" href="/style.css" />
        <head>
        <body>
            <div class="news-list">
            <header><img src="/logo.png"/>Wizard News</header>
            <div class="news-item">
                <p>
                ${post.title}
                <small>(by ${post.name})</small>
                </p>
                <p>${post.content}</p>
            </div>
            </div>
        </body>
        </html>
    `)
};

module.exports = postDetails;