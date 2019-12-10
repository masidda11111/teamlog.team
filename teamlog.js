var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');


var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname=="/"){
        if(queryData.id==undefined){
            template= fs.readFile(`html/how to play.html`, 'utf8', function(err, body){
                 var template = body
                 response.writeHead(200);
                 response.end(template);
    
              });
        }
        else {
            template= fs.readFile(`html/${queryData.id}`, 'utf8', function(err, body){
                var template = body
                response.writeHead(200);
                response.end(template);
            });
            
        }
    }  else {
            response.writeHead(404);
            response.end('Not found');
          }
       
    
});
app.listen(3000,() => {
    console.log("start")
});  