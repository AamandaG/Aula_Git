// 1. CLASSE BASE: Piloto
class Piloto {
    #nome;
    #numero;
    constructor(nome, numero) { //ele cria um objeto a partir das caracteriscas que estao na classe
        this.#nome = nome;
        this.#numero = numero;
    }
    getNome() { return this.#nome; } //ele entrega o nome e o numero
    getNumero() { return this.#numero; }
}

// 2. CLASSE FILHA: PilotoF1
class PilotoF1 extends Piloto {
    #totalVoltas = 0;
    constructor(nome, numero) {
        super(nome, numero); //super traz as informações da mãe 
    }
   
    correr(voltas) {
        this.#totalVoltas += voltas;
        return `O piloto ${this.getNome()} completou ${voltas} voltas.`;//ele traz as informações de forma resumida, não precisa colocar "+"
    }
   
    getVoltas() { return this.#totalVoltas; }
}

// 3. CLASSE: Equipe (Ações diretas)
class Equipe {
    #nomeEquipe;
    #orcamento;
    constructor(nome, orcamento) {
        this.#nomeEquipe = nome;
        this.#orcamento = orcamento;
    }

    // Gasta o dinheiro diretamente, sem perguntar se tem saldo
    realizarPitStop(custo) {
        this.#orcamento -= custo;
        return `Pit stop da ${this.#nomeEquipe} realizado. Novo orçamento: R$${this.#orcamento}`;
    }
}

// 4. CLASSE: Circuito
class Circuito {
    #nomePista;
    constructor(nome) {
        this.#nomePista = nome;
    }

    exibirStatus(piloto) {
        return `Status em ${this.#nomePista}: Piloto ${piloto.getNome()} está na volta ${piloto.getVoltas()}.`;
    }//serve para colocar variaveis de forma mais facil, sem precisar muitos acressimos 
}

// --- EXECUTANDO O FLUXO ---

const ferrari = new Equipe('MacLaren', 2000000);//o numero é o orçamento da equipe
const leclerc = new PilotoF1('Oscar', 81);
const monaco = new Circuito('Belgica');

// O código apenas executa as ordens:
console.log(leclerc.correr(35));           // Adiciona voltas
console.log(ferrari.realizarPitStop(500)); // Subtrai do orçamento
console.log(monaco.exibirStatus(leclerc)); // Mostra a posição atual