var http = require("http")

http.createServer(
    function(req, res){
        res.end("Bem vindo ao NodeJS")
    }
).listen(8181)

console.log("Servidor online")