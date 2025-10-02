import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Corrida } from '../entities/corrida.entity';
import { CorridaService } from '../services/corrida.service';

@Controller('/corridas')
export class CorridaController {
  constructor(private readonly corridaService: CorridaService) {}

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

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() corrida: Corrida): Promise<Corrida> {
    return this.corridaService.create(corrida);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id', ParseIntPipe) id: number, @Body() corrida: Corrida): Promise<Corrida> {
    return this.corridaService.update(id, corrida);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.corridaService.delete(id);
  }
}
