import { Controller } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}
}
