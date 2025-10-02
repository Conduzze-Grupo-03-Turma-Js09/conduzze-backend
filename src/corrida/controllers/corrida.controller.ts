import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseFloatPipe, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CorridaService } from '../services/corrida.service';
import { Corrida } from '../entities/corrida.entity';

@Controller("/corridas")
export class CorridaController {
  constructor(private readonly corridaService: CorridaService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Corrida[]> {
    return this.corridaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Corrida> {
    return this.corridaService.findById(id);
  }

  @Get('/origem/:origem')
  @HttpCode(HttpStatus.OK)
  findByOrigem(@Param('origem') origem: string): Promise<Corrida[]> {
    return this.corridaService.findByOrigem(origem);
  }

  @Get('/destino/:destino')
  @HttpCode(HttpStatus.OK)
  findByDestino(@Param('destino') destino: string): Promise<Corrida[]> {
    return this.corridaService.findByDestino(destino);
  }

  @Get('/valor/:valor')
  @HttpCode(HttpStatus.OK)
  findByValor(@Param('valor', ParseFloatPipe) valor: number): Promise<Corrida[]> {
    return this.corridaService.findByValor(valor);
  }

  @Get('/status/:status')
  @HttpCode(HttpStatus.OK)
  findByStatus(@Param('status') status: string): Promise<Corrida[]> {
    return this.corridaService.findByStatus(status);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() corrida: Corrida): Promise<Corrida> {
      return this.corridaService.create(corrida);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() corrida: Corrida): Promise<Corrida> {
      return this.corridaService.update(id, corrida);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
      return this.corridaService.delete(id);
  }
}