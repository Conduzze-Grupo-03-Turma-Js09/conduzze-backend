import { IsNotEmpty, Max, Min } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Corrida } from '../../corrida/entities/corrida.entity';

@Entity({ name: 'tb_motoristas' })
export class Motorista {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Min(0, { message: 'Avaliação não pode ser menor do que zero' })
  @Max(5, { message: 'Avaliação não pode ser maior do que cinco' })
  @Column({ nullable: false })
  avaliaçao: number;

  @OneToMany(() => Corrida, (corrida) => corrida.motorista)
  corrida: Corrida;
}
