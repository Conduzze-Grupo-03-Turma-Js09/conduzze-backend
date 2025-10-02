import { Module } from '@nestjs/common';
import { CorridaController } from './controllers/corrida.controller';
import { Corrida } from './entities/corrida.entity';
import { CorridaService } from './services/corrida.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Entity({ name: 'tb_corrida' })
export class Corrida {
  @PrimaryGeneratedColumn()

  export class Corrida {
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  destino: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
   origem: string;

  @Column({ type: 'date', nullable: false })
  valor: Number;

  @Column({ length: 255, nullable: false })
  status: number;
}
