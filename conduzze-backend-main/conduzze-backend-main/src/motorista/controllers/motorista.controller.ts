import { Controller } from '@nestjs/common';
import { MotoristaService } from '../services/motorista.service';

@Controller('motoristas')
export class MotoristaController {
  constructor(private readonly motoristaService: MotoristaService) {}
}
