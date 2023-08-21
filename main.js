let fs= require('fs');
let http= require('http');

let server=http.createServer(function (req, res){

    if(req.url="/"){


      let myData=  fs.readFileSync('home.html');
        res.writeHead(200,{'Content-type': 'text/html'});
        res.write(myData);
        res.end();
    }

});

server.listen(5050);
console.log("server run..")