import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleEntity } from './entities/example.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExampleEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class User {}
