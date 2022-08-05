let http = require('http')

let server= http.createServer();
server.on('request', (req,res) =>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end("Hello world!")
}).listen(8080)