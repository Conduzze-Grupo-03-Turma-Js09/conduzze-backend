import { Module } from '@nestjs/common';
import { MotoristaController } from './controllers/corrida.controller';
import { Motorista } from './entities/corrida.entity';
import { MotoristaService } from './services/corrida.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Entity({ name: 'tb_motorista' })
export class Corrida {
  @PrimaryGeneratedColumn()
=======
export class Corrida {
>>>>>>> 5882d69942159b8cd6727a2c45afeb435711965d
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'date', nullable: false })
  avaliaçao: Number;

}
