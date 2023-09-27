//upload file

// 1. Create an upload form

//TO connect frontend to nodejs need a server, So we create a server using http module
var http = require('http');
var fs = require('fs');

const PORT = 8080;

fs.readFile('./Code/index.html', (err, html)=>{
    if(err) return err;

    http.createServer((req, res)=>{
        res.writeHead(200, {"Content-type":"text/html"})

        res.write(html); // res is basically html data
        res.end();
    }).listen(PORT
        )
});
