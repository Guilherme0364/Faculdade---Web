const express = require("express")
const path  = require("path")
const basePath = path.join(__dirname, 'templates')

const app = express()
port = 8181

const checkAuth = (req,res,next) => {
    req.authStatus = false
    
    if(req.authStatus){
        console.log("Está logado, pode continuar")
        next()
    } else{
        console.log("Não está logado")
        next()
    }
}

app.get("/", (req,res) => {
    res.send("Rodando na porta Home")
})

app.get("/cliente", (req,res) => {
    res.send("Rodando na porta Cliente")
})

app.get("/cliente/cadastro", (req,res) => {
    res.send("Rodando na porta Cadastro")
})

app.get("/ola/:nome", (req,res) => {
    res.send("Olá " + req.params.nome)
})

app.get("/user/cpf", (req,res) => {
    var value  = req.query["value"]
    var value2 = req.query["value2"]

    if(value && value2){
        res.send("Valor: " + value + "<br>Valor 2: " + value2)
    } else{
        res.send("Não informado nenhum valor")
    }
})

app.get("/soma", (req,res) => {
    var num1 = req.query["num1"]
    var num2 = req.query["num2"]

    num1 = parseInt(num1)
    num2 = parseInt(num2)

    var soma = num1 + num2

    if(num1 && num2){
        res.send("A soma dos números indicados por parâmetro é: " + soma)
    }
})
                                                                                              
app.get("/path", (req,res) => {
    res.sendFile(basePath + "/index.html")
})


app.get("/users/add", (req,res) => {
    res.sendFile(basePath + "/form.html")
})

app.post("/users/add", (req,res) => {
    console.log(req.body)
    console.log(req.body.nome)
    console.log(req.body.idade)
})

app.use(express.urlencoded({extended:true}))
app.use(checkAuth)
app.listen(port, (error) => {
    if(error){
        console.log(error)
    } else{
        console.log("Servidor iniciado na rota: " + port)
    }
})