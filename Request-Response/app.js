const http = require('http');

const server = http.createServer((req, res) => {
   
    const URL = req.url;

    res.setHeader('Content-Type', 'text/plain');

 
    if (URL === '/home') {
        res.end('Welcome home');
    } else if (URL === '/about') {
        res.end('Welcome to About Us page');
    } else if (URL === '/node') {
        res.end('Welcome to my Node Js project');
    } else {
        
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
