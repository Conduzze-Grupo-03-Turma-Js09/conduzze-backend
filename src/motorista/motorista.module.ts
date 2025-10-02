import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotoristaController } from './controllers/motorista.controller';
import { Motorista } from './entities/motorista.entity';
import { MotoristaService } from './services/motorista.service';

@Module({
  imports: [TypeOrmModule.forFeature([Motorista])],
  controllers: [MotoristaController],
  providers: [MotoristaService],
  exports: [MotoristaService],
})
export class MotoristaModule {}
