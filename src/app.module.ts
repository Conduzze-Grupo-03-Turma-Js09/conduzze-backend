import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CorridaModule } from './corrida/corrida.module';
import { Corrida } from './corrida/entities/corrida.entity';
import { Motorista } from './motorista/entities/motorista.entity';
import { MotoristaModule } from './motorista/motorista.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_conduzze',
      entities: [Corrida, Motorista, Usuario],
      synchronize: true,
    }),
    UsuarioModule,
    MotoristaModule,
    CorridaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
