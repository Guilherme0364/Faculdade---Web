const express = require("express");

const app = express();

const port = 9999;

app.get("/", (req,res) => {
    res.send("Node com express")
})

app.listen(port, (err) => {
    if(err){
        console.log(err)
    } else{
        console.log("Escutando na porta: " + port);
    }
});

