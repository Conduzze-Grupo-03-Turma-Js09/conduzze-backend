import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Motorista } from '../../motorista/entities/motorista.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'tb_corridas' })
export class Corrida {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  destino: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  origem: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  valor: number;

  @Column({ length: 255, nullable: false })
  status: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.corrida, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;

  @ManyToOne(() => Motorista, (motorista) => motorista.corrida, {
    onDelete: 'CASCADE',
  })
  motorista: Motorista;
}
