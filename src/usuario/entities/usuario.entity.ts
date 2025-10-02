import { Module } from '@nestjs/common';
import { UsuarioController } from './controllers/corrida.controller';
import { Usuario } from './entities/corrida.entity';
import { UsuarioService } from './services/corrida.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Entity({ name: 'tb_corrida' })
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
  @Column({ length: 255, nullable: false })
   usuario: string;

  @Column({ length: 255, nullable: false })
  senha: string;

  @Column({ length: 3000, nullable: false })
  foto: string;
}

