import { Module } from '@nestjs/common';
import { MotoristaController } from './controllers/motorista.controller';
import { Motorista } from './entities/motorista.entity';
import { MotoristaService } from './services/motorista.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Motorista])],
  controllers: [MotoristaController],
  providers: [MotoristaService],
  exports: [],
})
export class MotoristaModule {}
