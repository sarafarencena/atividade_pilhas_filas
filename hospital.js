// Classe Fila (FIFO: First In, First Out)
class Fila {
    constructor() {
        this.itens = [];
    }

        // Adiciona elementos ao fim da fila
    enfileirar(elemento) {
        this.itens.push(elemento);
    }

    // Remove o primeiro elemento da fila
    desenfileirar() {
        return this.itens.shift();
    }

    // Retorna o primeiro da fila, sem remove-lo
    inicio() {
        return this.itens[0];
    }

    // Verifica se a fila está vazia
    estaVazia() {
        return this.itens.length === 0;
    }

    // Imprime a fila
    imprimir() {
        return this.itens.join(', ');
    }

}

// Classe Pilha (LIFO: Last In, First Out)
class Pilha {
    constructor() {
        this.itens = [];
    }

    // Adiciona elementos ao topo da pilha
    empilhar(elemento) {
        this.itens.push(elemento);
    }

    // Remove o topo da pilha
    desempilhar() {
        return this.itens.pop();
    }

    // Verifuca o topo da pilha sem remover
    topo() {
        return this.itens[this.itens.length - 1];
    }

    // Verifica se a pilha está vazia
    estaVazia() {
        return this.itens.length === 0;
    }

    // Imprime a pilha
    imprimir() {
        return this.itens.slice().reverse().join(', ');
    }
}

// Criando fila de atendimento e pilha de prontuários
const filaAtendimento = new Fila();
const pilhaProntuarios = new Pilha();

// Adicionando 5 pacientes à fila
filaAtendimento.enfileirar("Luisa Machado");
filaAtendimento.enfileirar("Felipe Silva");
filaAtendimento.enfileirar("Marcela Mendes");
filaAtendimento.enfileirar("Carolina Dantas");
filaAtendimento.enfileirar("Lucas Pereira");

// Mostrar quem será o próximo a ser atendido
console.log("Próximo paciente a ser atendido:", filaAtendimento.inicio());

// Simular o atendimento de dois pacientes (remover da fila)
for (let i = 0; i < 2; i++) {
    const atendido = filaAtendimento.desenfileirar();
    console.log(`Paciente atendido: ${atendido}`);
    pilhaProntuarios.empilhar(atendido); // Após cada atendimento, adiciona à pilha de prontuários o nome de cada paciente
}

// Imprime a fila restante
console.log("\nFila de pacientes restante:");
console.log(filaAtendimento.imprimir());

// Imprime a pilha de prontuários
console.log("\nPilha de prontuários (do topo para base):");
console.log(pilhaProntuarios.imprimir());