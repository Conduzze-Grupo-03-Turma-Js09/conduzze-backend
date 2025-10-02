import { UsuarioService } from './../../usuario/services/usuario.service';
import { Usuario } from './../../usuario/entities/usuario.entity';
import {   Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put, } from '@nestjs/common';


@Controller('/usuarios')
export class UsuarioController{
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Usuario: Postagem)

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]> {
        return this.UsuarioService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
      return this.UsuarioService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Usuario[]> {
      return this.UsuarioService.findAllByNome(nome);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() usuario: string): Promise<Usuario>{
      return this.UsuarioService.Update(usuario)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe): id: number){
      return this.UsuarioService.delete(id)
    }




}