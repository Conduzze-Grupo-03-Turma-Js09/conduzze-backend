import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Motorista } from '../entities/motorista.entity';
import { MotoristaService } from '../services/motorista.service';

@Controller('motoristas')
export class MotoristaController {
  constructor(private readonly motoristaService: MotoristaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Motorista[]> {
    return this.motoristaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Motorista> {
    return this.motoristaService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByName(@Param('nome') nome: string): Promise<Motorista> {
    return this.motoristaService.findByNome(nome);
  }
  @Get('/:id/corridas')
  @HttpCode(HttpStatus.OK)
  contagemCorridas(@Param('id') id: number): Promise<Motorista | null> {
    return this.motoristaService.contagemCorridas(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() motorista: Motorista): Promise<Motorista> {
    return this.motoristaService.create(motorista);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() motorista: Motorista): Promise<Motorista> {
    return this.motoristaService.update(motorista);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.motoristaService.delete(id);
  }
}
