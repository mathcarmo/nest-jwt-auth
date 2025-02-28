import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Disponibiliza o repositório
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Exporta o serviço para uso em outros módulos
})
export class UsersModule {}