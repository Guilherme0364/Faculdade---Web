const readline = require("readline")

var rl = readline.createInterface(
    process.stdin, process.stdout
)

rl.question("Digite o primeiro número: "), (n1) => {
    rl.question("Digite o segundo número: ", (n2) => {

        const num1 = parseFloat(n1)
        const num2 = parseFloat(n2)

        var soma = num1 + num2
        console.log(soma)
        rl.close()
    })
}