const prompt = require('prompt-sync')()

let opcao = prompt("Digite a opcao abaixo: ")

console.log("1 - Contar ate 10")
console.log("2 - Contar ate 20")
console.log("3 - Contar ate 30")

switch(opcao) {
    case "1":
        for (let i = 0; i <= 10; i++) {
            console.log(i)
        }
        break
    case "2":
        for(let i = 0; i <= 20; i++) {
            console.log(i)
        }
        break
    case "3": 
        for(let i = 0; i <= 30; i++) {
            console.log(i)
        }
        break
    default:
        console.log("Valor invalido")
}