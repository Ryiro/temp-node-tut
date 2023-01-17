const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url == "/"){
        res.end('Welcome to our homepage. hello');
    }
    if(req.url == '/about'){
        res.end('here is our short story');
    }

    res.end(`
    <h1>Oops </h1>
    `)


})

server.listen(5000);