class Cliente {
    #cpf;
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf;
    }
    
    colocarMaiusculo(texto) {
        return texto.toUpperCase();
    }
    colocarMinusculo(texto) {
        return texto.toLowerCase();
    }

    get pegarCpf() {
        return this.#cpf;
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    colocarMaiusculo(texto) {
        return texto.toUpperCase();
    }
    colocarMinusculo(texto) {
        return texto.toLowerCase();
    }

    mostrarDetalhe() {
        return `Estado: ${this.colocarMaiusculo(this.estado)} cidade: ${this.cidade} rua: ${this.rua} número: ${this.numero}`;
    }
}

class Empresa {
    #cnpj;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.clientes = new Set();
        this.telefones = new Set();
    }
    
    colocarMaiusculo(texto) {
        return texto.toUpperCase();
    }
    colocarMinusculo(texto) {
        return texto.toLowerCase();
    }

    get getCnpj() {
        return this.#cnpj;
    }

    mostrarDetalhe() {
        console.log(`Razão Social: ${this.colocarMaiusculo(this.razaoSocial)}`);
        console.log(`Nome Fantasia: ${this.nomeFantasia}`);
        console.log("----------------------------------------------------------");
        
        this.clientes.forEach((cliente) => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(cliente.endereco.mostrarDetalhe());
            cliente.telefones.forEach((telefone) => {
                console.log(`ddd: ${telefone.ddd} número: ${telefone.numero}`);
            });
            console.log("----------------------------------------------------------");
        });
    }
}

// Criando a empresa e seus dados
const enderecoEmpresa = new Endereco("NY ", "Nova York", "Rua Mairipotaba", 100);
const empresa = new Empresa(" Central Perk Coffee Co.", "Central Perk", "42.736.312/0001-08", enderecoEmpresa);

empresa.telefones.add(new Telefone("19", "3343-1278"));
empresa.telefones.add(new Telefone("15", "98457-7852"));

// Criando clientes e adicionando à empresa
const clientes = [
    new Cliente("Mônica", "123.456.789-01", new Endereco("NY", "Nova York", "Bedford Street", 90)),
    new Cliente("Chandler", "123.456.789-02", new Endereco("NY", "Nova York", "Bedford Street", 20)),
    new Cliente("Ross", "123.456.789-03", new Endereco("NY", "Nova York", "Bedford Street", 30)),
    new Cliente("Joey", "123.456.789-04", new Endereco("NY", "Nova York", "Bedford Street", 40)),
    new Cliente("Rachel", "123.456.789-05", new Endereco("NY", "Nova York", "Bedford Street", 50))
];

clientes.forEach(cliente => {
    cliente.telefones.add(new Telefone("12", "99999-0001"));
    cliente.telefones.add(new Telefone("12", "98888-1111"));
    empresa.clientes.add(cliente);
});

// Exibir detalhes da empresa e dos clientes
console.log(empresa.mostrarDetalhe());
