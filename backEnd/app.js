const http = require('http')
const route = require('./route')

let server = http.createServer((req,res)=>{
    route(req,res)

})
server.listen(8080)
