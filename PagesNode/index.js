var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
  
      var file = url.parse(req.url, true);
      var filename = "." + file.pathname;
      
     if(filename=='./home'|| filename=='./'){
     fs.readFile('./index.html', function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });}
      else{
      fs.readFile(filename, function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });}
     
    }).listen(3000, ()=>{
      console.log("The Server is listening on port 3000");
    });




