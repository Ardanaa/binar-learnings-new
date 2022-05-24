const http = require("http");
const path = require("path");
const fs = require("fs");

const HOST = "localhost";
const PORT = 8082;

const PUBLIC_DIRECTORY = path.join(__dirname, "public");

const onRequest = (req, res) => {
    const url = req.url;

    switch (url) {
        case "/":
            const htmlFileHome = path.join(PUBLIC_DIRECTORY, "index.html");
            const htmlHome = fs.readFileSync(htmlFileHome, "utf8");

            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(htmlHome);

            break;

        case "/css/style.css":
            const cssFile = path.join(PUBLIC_DIRECTORY, "css/style.css");
            const css = fs.readFileSync(cssFile, "utf8");

            res.setHeader("Content-Type", "text/css");
            res.writeHead(200);
            res.end(css);

            break;

        case "/css/owl.carousel.min.css":
            const owlCssFile = path.join(PUBLIC_DIRECTORY, "css/owl.carousel.min.css");
            const owlCss = fs.readFileSync(owlCssFile, "utf8");

            res.setHeader("Content-Type", "text/css");
            res.writeHead(200);
            res.end(owlCss);

            break;

        case "/css/owl.theme.default.min.css":
            const owlThemeCssFile = path.join(PUBLIC_DIRECTORY, "css/owl.theme.default.min.css");
            const owlThemeCss = fs.readFileSync(owlThemeCssFile, "utf8");

            res.setHeader("Content-Type", "text/css");
            res.writeHead(200);
            res.end(owlThemeCss);

            break;

        case "/js/carousel.js":
            const owlJsFile = path.join(PUBLIC_DIRECTORY, "js/carousel.js");
            const owlJs = fs.readFileSync(owlJsFile, "utf8");

            res.setHeader("Content-Type", "text/javascript");
            res.writeHead(200);
            res.end(owlJs);

            break;

        case "/js/jquery.min.js":
            const owlJqueryFile = path.join(PUBLIC_DIRECTORY, "js/jquery.min.js");
            const owlJquery = fs.readFileSync(owlJqueryFile, "utf8");

            res.setHeader("Content-Type", "text/javascript");
            res.writeHead(200);
            res.end(owlJquery);

            break;

        case "/js/carousel.js":
            const owlJsMinFile = path.join(PUBLIC_DIRECTORY, "js/owl.carousel.min.js");
            const owlJsMin = fs.readFileSync(owlJsMinFile, "utf8");

            res.setHeader("Content-Type", "text/javascript");
            res.writeHead(200);
            res.end(owlJsMin);

            break;
    }

};

const server = http.createServer(onRequest);

server.listen(PORT, HOST, () => {
    console.log(`Server already listening on http://${HOST}:${PORT}`);
});