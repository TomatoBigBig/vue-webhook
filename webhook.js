
// let http = require('http')
// let server = http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin','*')
//     // if(req.url === '/api/users'){
//     //     res.end(JSON.stringify(users))
//     // }else{
//     //     res.end('aiwoqu 求你了！！！！！')
//     // }
//     console.log('receive webhook request')
//     if(req.url === '/api/webhook'){
//         // res.setHeader('Content-Type','application/json')
//         console.log('return is ok')
//         res.end(JSON.stringify({ok:true}))
//     }else {
//         res.end('啥也不是')
//     }
// });
// server.listen(3002,() => {
//     console.log('start webhook giaogiaogiao')
// })
let http = require('http')
let users = [
    {
        id:111,
        name:'aiwocao'
    },
    {
        id:222,
        name:'wonima'
    }
]
let server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    if(req.url === '/api/ws'){
        res.end(JSON.stringify(users))
    }else{
        res.end('aiwoqu 求你了！！！！！')
    }
});
server.listen(3002,() => {
    console.log('start service')
})