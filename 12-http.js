const http = require('http')




//req: incoming request 
//res: response/what we're sending back to the client 
const server = http.createServer((req, res)=>{ 
    console.log(req)

    if(req.url === '/'){ //if client requests home page
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})


//set port that server is listening to 
server.listen(5000)