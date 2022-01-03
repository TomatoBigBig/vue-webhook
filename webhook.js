let http = require('http');
let createHandler = require('github-webhook-handler')
let handler = createHandler({path:'/webhook', secret:'123456'})


http.createServer(function(req, res){
    console.log(req.method, req.url)
    handler(res,req,function(){
        res.statusCode = 404
        res.end('not found')
    })
    // if(req.method == 'POST' && req.url == '/webhook'){
    //     res.setHeader('Content-Type','application/json')
    //     res.end(JSON.stringify({ok:true}))
    // }else {
    //     res.end('啥也不是')
    // }
}).listen(8099,() => {
    console.log('webhook start gogogo')
})


handler.on('error', function(err){
    console.log('error:',err.message)
})

handler.on('push', function(event){
    console.log('Listen to the push')
})


handler.on('issues', function(event){
    console.log('Listen to the issues')
})