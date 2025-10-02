import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
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
    const existente = await this.findById(motorista.id);
    return await this.motoristaRepository.save({
      ...existente,
      ...motorista,
    });
  }

  
  async delete(id: number): Promise<void> {
    const motorista = await this.findById(id); // garante que existe
    await this.motoristaRepository.delete(motorista.id);
  }
}
