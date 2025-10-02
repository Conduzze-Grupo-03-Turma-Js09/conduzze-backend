import { IsEmail, IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Corrida } from '../../corrida/entities/corrida.entity';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  usuario: string;

  @Column({ length: 255, nullable: false })
  senha: string;

  @Column({ length: 3000, nullable: false })
  foto: string;

  @OneToMany(() => Corrida, (corrida) => corrida.usuario)
  corrida: Corrida;
}
