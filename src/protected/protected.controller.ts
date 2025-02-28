import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('protected')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class ProtectedController {
  @Get()
  @Roles('admin')
  getProtectedResource() {
    return 'This is a protected resource';
  }
}