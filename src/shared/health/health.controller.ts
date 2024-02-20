import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Health Check')
@Controller()
export class HealthController {
  @ApiOperation({ summary: 'Endpoint to health check api' })
  @Get()
  checkHealth() {
    return { status: 'ok' };
  }
}
