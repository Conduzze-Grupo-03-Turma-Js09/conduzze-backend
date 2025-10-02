export class Usuario {}
<<<<<<< HEAD
=======

class Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;

  constructor(id: number, nome: string, usuario: string, senha: string, foto: string) {
    this.id = id;
    this.nome = nome;
    this.usuario = usuario;
    this.senha = senha;
    this.foto = foto;
  }

  exibirDetalhes(): void {
    console.log(`--- Usuário ---`);
    console.log(`ID: ${this.id}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Usuário: ${this.usuario}`);
    console.log(`Foto: ${this.foto}`);
  }
}
>>>>>>> origin/main
