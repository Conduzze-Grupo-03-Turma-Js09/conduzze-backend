import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Motorista } from '../entities/motorista.entity';

@Injectable()
export class MotoristaService {
  constructor(
    @InjectRepository(Motorista)
    private readonly motoristaRepository: Repository<Motorista>,
  ) {}

  async findAll(): Promise<Motorista[]> {
    return await this.motoristaRepository.find();
  }

  async findById(id: number): Promise<Motorista> {
    const motorista = await this.motoristaRepository.findOneBy({ id });
    if (!motorista) {
      throw new NotFoundException(`Motorista com ID ${id} não encontrado`);
    }
    return motorista;
  }

  async findByNome(nome: string): Promise<Motorista> {
    const motorista = await this.motoristaRepository.findOne({
      where: { nome: ILike(`%${nome}%`) },
    });

    if (!motorista) {
      throw new NotFoundException(`Motorista com nome '${nome}' não encontrado`);
    }

    return motorista;
  }

  async create(motorista: Motorista): Promise<Motorista> {
    return await this.motoristaRepository.save(motorista);
  }
  async update(motorista: Motorista): Promise<Motorista> {
    await this.findById(motorista.id);
    return await this.motoristaRepository.save(motorista);
  }

  async delete(id: number): Promise<void> {
    const motorista = await this.findById(id);
    await this.motoristaRepository.delete(motorista.id);
  }
  async contagemCorridas(id: number): Promise<Motorista | null> {
    return this.motoristaRepository
      .createQueryBuilder('m')
      .where('m.id = :id', { id })
      .loadRelationCountAndMap('m.totalCorridas', 'm.corrida')
      .getOne();
  }
}
