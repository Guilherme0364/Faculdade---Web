const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var db = {
    games: [
        {
            id: 1,
            title: "CS GO 2",
            year: 2023
        },
        {
            id: 1,
            title: "Cs GO ",
            year: 2023
        },
        {
            id: 1,
            title: "Valorant",
            year: 2019
        },
    ],

}

        
app.get("/games" , (req,res) => {
    res.sendStatus(200)
    res.json(db.games)
})

app.get("/games/:id" , (req,res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
        res.send("Isso não é um número")
    } else{
        var id = parseInt(req.params.id)
        var game = db.games.find(game => game.id == id)

        if(game != undefined){
            res.statusCode = 200
            res.json(game)
        } else{
            res.sendStatus(404)
        }        
    }
})


app.post("/game", (req, res) => {
    var {title, year} = req.body

    db.games.push({
        id: 4, 
        title, 
        year
    })
    res.sendStatus(200)
})

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
