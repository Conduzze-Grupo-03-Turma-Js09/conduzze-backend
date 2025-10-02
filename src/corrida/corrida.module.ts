import { Module } from '@nestjs/common';
import { CorridaController } from './controllers/corrida.controller';
import { Corrida } from './entities/corrida.entity';
import { CorridaService } from './services/corrida.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Corrida])],
  controllers: [CorridaController],
  providers: [CorridaService],
  exports: [],
})
export class CorridaModule {}
