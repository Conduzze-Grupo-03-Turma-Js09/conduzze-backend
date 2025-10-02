import { Controller } from '@nestjs/common';
import { CorridaService } from '../services/corrida.service';

@Controller('corridas')
export class CorridaController {
  constructor(private readonly corridaService: CorridaService) {}
}
