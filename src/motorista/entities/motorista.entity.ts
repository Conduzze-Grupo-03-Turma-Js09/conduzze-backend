export class Motorista {}
<<<<<<< HEAD
=======

class Motorista {
  id: number;
  nome: string;
  avaliacao: number;

  constructor(id: number, nome: string, avaliacao: number) {
    this.id = id;
    this.nome = nome;
    this.avaliacao = avaliacao;
  }

  exibirDetalhes(): void {
    console.log(`--- Motorista ---`);
    console.log(`ID: ${this.id}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Avaliação: ${this.avaliacao}`);
  }
}
>>>>>>> origin/main
