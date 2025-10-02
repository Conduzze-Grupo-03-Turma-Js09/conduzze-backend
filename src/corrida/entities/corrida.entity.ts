import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
