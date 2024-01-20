const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">Send</button>');

        // Read the content of message.txt and display it if available
        fs.readFile('message.txt', 'utf-8', (err, data) => {
            if (!err) {
                res.write(`<p>${data}</p>`);
            }
            res.write('</form>');
            res.write('</body>');
            res.write('</html>');
            res.end(); // Move res.end() here
        });
    } else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            });
        });
    } else {
        // Move the common response headers and content outside the if conditions
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from node js server</h1></body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(3000);
