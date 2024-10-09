// Passagem de dados para função por variáveis simples

let nome = "Ivan"
let sobrenome = "Almeida"
let idade = 45
let nacionalidade = "Portuguesa"
let fruta = ["Laranja", "Banana", "Maça", "Pêra"]
let valor = [2.25, 3.10, 1.85, 2.10]

apresentacao(nome, sobrenome, idade, nacionalidade)

function apresentacao(nome, sobrenome, idade, nacionalidade){
    console.log(`Muito bom dia caro Sr.${nome} ${sobrenome}.`)
    console.log(`Você tem ${idade} anos de idade e é ${nacionalidade}`)
    console.log(`-----------------------------`)
    console.log(`As suas compras são:`)
    for (let index in fruta){
        console.log(`Fruta: ${fruta[index]} com o valor de ${valor[index]}`)
    }
}