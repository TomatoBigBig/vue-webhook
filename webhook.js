let http = require('http');
let server = http.createServer((req, res) => {
    console.log(req.method, req.url)
    if(req.method == 'POST' && req.url == '/webhook'){
        res.setHeader('Content-Type','application/json')
        res.end(JSON.stringify({ok:true}))
    }else {
        res.end('啥也不是')
    }
})
server.listen(4000,() => {
    console.log('webhook start')
})