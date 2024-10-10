class criarHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar(){
        let ataque

        switch(this.tipo){
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
            default:
                ataque = "ataque desconhecido"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)

    }

}

heroi = new criarHeroi("Gandalf", 100, "mago")
heroi.atacar()
heroi = new criarHeroi("Gandalf", 100, "guerreiro")
heroi.atacar()
heroi = new criarHeroi("Gandalf", 100, "monge")
heroi.atacar()
heroi = new criarHeroi("Gandalf", 100, "ninja")
heroi.atacar()
heroi = new criarHeroi("Gandalf", 100, "Super Guerreiro")
heroi.atacar()

//Ivan Almeida