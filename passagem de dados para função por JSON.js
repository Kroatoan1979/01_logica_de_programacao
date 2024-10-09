// Passagem de dados para função por Json com iteração de vetores

let dadosFatura = {
    nome: "Ivan",
    sobrenome: "Almeida",
    idade: 45,
    nacionalidade: "Portuguesa",
    fruta: {
        0: ["Laranja", 2.25],
        1: ["Banana", 3.10],
        2: ["Maça", 1.85],
        3: ["Pêra", 2.10]
    } 
}


fatura(dadosFatura)

function fatura(dadosFatura){
    console.log(`Muito bom dia caro Sr.${dadosFatura.nome} ${dadosFatura.sobrenome}.`)
    console.log(`A sua idade é de ${dadosFatura.idade} anos e é de nacionalidade ${dadosFatura.nacionalidade}`)
    let total = 0

    for (let index in dadosFatura.fruta){
        let [nomeFruta, valorFruta] = dadosFatura.fruta[index]
        console.log(`Comprou os seguintes itens: ${nomeFruta} ao valor de ${valorFruta} €`)
        total += valorFruta
    }
    console.log(`---------------------------------------`)
    console.log(`O total a pagar é de ${total.toFixed(2)} €`)
}