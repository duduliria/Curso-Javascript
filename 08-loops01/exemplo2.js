const prompt = require('prompt-sync')()

// perguntar ao usuario 
let ate = prompt('Digite o valor: ')

// decremento - 50 indo ate 1
for (let i = 50; i >= ate; i--) {
    console.log(i)
}