var http = require("http")

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-type',"text/plain");
//     res.write("Hello world")
//     res.end()
// })
// server.listen(5000,()=>console.log("server running"));
// const handler = (req,res)=>{
//     if (req.url === "/test") res.write("Server Is Running")
//     res.end()
    
// }
// const server = http.createServer(handler);
// server.listen(5000);
const handler = (req,res)=>{
    switch(req.url){
        case '/books':
            res.write("This is book Endpoint")
            break;
        case '/products':
            const products = [
                {id:1,name:"Apple",price:10000},
                {id:2,name:"Samsung",price:8000},
                {id:3,name:"Apple",price:89000}

            ]
            res.write(JSON.stringify(products));
            break;    
        default:
            res.write("This is url")
    }
    res.end()

}
const server = http.createServer(handler);
server.listen(5000);

