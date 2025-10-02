import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { MotoristaService } from '../../motorista/services/motorista.service';
import { Corrida } from '../entities/corrida.entity';
import { UsuarioService } from './../../usuario/services/usuario.service';

@Injectable()
export class CorridaService {
  constructor(
    @InjectRepository(Corrida)
    private corridaRepository: Repository<Corrida>,
    private usuarioService: UsuarioService,
    private motoristaService: MotoristaService,
  ) {}

  async create(corrida: Corrida): Promise<Corrida> {
    await this.usuarioService.findById(corrida.usuario.id);
    await this.motoristaService.findById(corrida.motorista.id);
    return await this.corridaRepository.save(corrida);
  }

  async findAll(): Promise<Corrida[]> {
    return await this.corridaRepository.find({
      relations: {
        usuario: true,
        motorista: true,
      },
    });
  }

  async findById(id: number): Promise<Corrida> {
    const corrida = await this.corridaRepository.findOne({
      where: {
        id,
      },
      relations: {
        usuario: true,
        motorista: true,
      },
    });
    if (!corrida) throw new HttpException('Corrida não encontrada!', HttpStatus.NOT_FOUND);

    return corrida;
  }

  async update(corrida: Corrida): Promise<Corrida> {
    await this.findById(corrida.id);
    await this.usuarioService.findById(corrida.usuario.id);
    await this.motoristaService.findById(corrida.motorista.id);
    return await this.corridaRepository.save(corrida);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.corridaRepository.delete(id);
  }
}
