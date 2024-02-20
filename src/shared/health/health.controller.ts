import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Helth Check')
@Controller()
export class HealthController {
  @Get()
  checkHealth() {
    return { status: 'ok' };
  }
}
