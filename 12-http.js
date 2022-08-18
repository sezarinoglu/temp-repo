const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url==='/'){
    res.end('welcome to our homepage')
}
else if(req.url==='/about'){
    res.end('welcome to our about')
}
else {res.end('<h1>404<h1>')}


})


server.listen(5050)