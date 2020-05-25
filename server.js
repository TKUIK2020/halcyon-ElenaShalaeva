const http = require("http");
const fs = require("fs");
 
http.createServer(function(request, response){
     
    console.log(`Запрошенный адрес: ${request.url}`);
    if(request.url.startsWith("/laba10/")){     
        const filePath = request.url.substr(1);
        fs.readFile(filePath, function(error, data){
           {
                response.setHeader("Content-Type", "text/html");
                response.end(data);
            }
        })
    }
    else{      
        response.end("Hello World!");
    }
}).listen(3000);

