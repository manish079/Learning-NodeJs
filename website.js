let http = require('http');
const port = process.env.port || 3000;
const server = http.createServer((req, res)=>{
    res.setHeader('Content-type','text/html');
    console.log(req.url);

    if(req.url=='/'){
    res.statusCode = 200;
    res.end("<h1>I am Manish Prajapat</h1>")
    }
    else if(req.url == '/about'){
    res.statusCode = 200;
        res.end('<h1>About Manish<h1>');
    }
        
    else if(req.url == '/contact'){
    res.statusCode = 200;
        res.end("<h1>Contact to Manish</h1>")
    }
    else if(req.url == '/hello'){
        //Read a html file
        res.statusCode = 200;
        const fs = require('fs');
        const data = fs.readFileSync('./Code/temp.html');
        res.end(data.toString());
    }
    //If request is bad 
    else  {
        // res.manish();  //It will do crash our server
        res.end(`<h1>Not found ${res.statusCode = 404}!! <h1>`);
    }  
        
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});