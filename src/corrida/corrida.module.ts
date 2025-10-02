import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotoristaModule } from '../motorista/motorista.module';
import { UsuarioModule } from './../usuario/usuario.module';
import { CorridaController } from './controllers/corrida.controller';
import { Corrida } from './entities/corrida.entity';
import { CorridaService } from './services/corrida.service';

@Module({
  imports: [TypeOrmModule.forFeature([Corrida]), MotoristaModule, UsuarioModule],
  controllers: [CorridaController],
  providers: [CorridaService],
  exports: [],
})
export class CorridaModule {}
