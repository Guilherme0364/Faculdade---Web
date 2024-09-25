const express = require("express"); 
const app = express(); 
 
app.get("/", function (req, res) { 
   res.send("Rota HOME"); 
}); 
 
app.listen(8181, function (erro) { 
   if (erro) { 
       console.log("Erro"); 
   } else { 
       console.log("Servidor iniciado..."); 
   } 
}); 
