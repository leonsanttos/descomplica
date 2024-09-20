// Classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando como ${this.cargo}.`);
    }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}

// Criando instâncias de Gerente e Desenvolvedor
const gerente = new Gerente("Ana", 40, "Gerente", "Recursos Humanos");
const desenvolvedor = new Desenvolvedor("Carlos", 30, "Desenvolvedor", "JavaScript");

// Chamando os métodos para o Gerente
gerente.seApresentar();  // Olá, meu nome é Ana, tenho 40 anos e sou Gerente.
gerente.trabalhar();      // Ana está trabalhando como Gerente.
gerente.gerenciar();      // Ana está gerenciando o departamento de Recursos Humanos.

// Chamando os métodos para o Desenvolvedor
desenvolvedor.seApresentar();  // Olá, meu nome é Carlos, tenho 30 anos e sou Desenvolvedor.
desenvolvedor.trabalhar();     // Carlos está trabalhando como Desenvolvedor.
desenvolvedor.programar();     // Carlos está programando em JavaScript.
