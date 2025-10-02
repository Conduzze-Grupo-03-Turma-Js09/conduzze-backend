export class Corrida {}

class Corrida {
  id: number;
  origem: string;
  destino: string;
  valor: number;
  status: string;
  motoristaId: number;
  usuarioId: number;

  constructor(
    id: number,
    origem: string,
    destino: string,
    valor: number,
    status: string,
    motoristaId: number,
    usuarioId: number
  ) {
    this.id = id;
    this.origem = origem;
    this.destino = destino;
    this.valor = valor;
    this.status = status;
    this.motoristaId = motoristaId;
    this.usuarioId = usuarioId;
  }

  exibirDetalhes(): void {
    console.log(`--- Corrida ---`);
    console.log(`ID: ${this.id}`);
    console.log(`Origem: ${this.origem}`);
    console.log(`Destino: ${this.destino}`);
    console.log(`Valor: R$ ${this.valor.toFixed(2)}`);
    console.log(`Status: ${this.status}`);
    console.log(`ID do Motorista: ${this.motoristaId}`);
    console.log(`ID do Usuário: ${this.usuarioId}`);
  }
}