// JSON - JavaScript Object Notation
// Composto por: chave:valor com o objectivo de transferir dados

let invoice = {
    nome : "Ivan",
    age : 45,
    products : {
        0: ["Mouse", 29.90],
        1: ["Teclado Mecânico", 129.99],
        2: ["Monitor", 899.99]
    },
    taxes: 98.90
}


generateInvoice(invoice)

function generateInvoice(invoice){
    console.log("O comprador é " + invoice.nome)
    console.log("A idade é " + invoice.age)
    console.log("--------------------")

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`${productName}: ${productPrice} €`)
    }
}
