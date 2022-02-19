import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleEntity } from './entities/example.entity';
import { UserController } from './example.controller';
import { UserService } from './example.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExampleEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class User {}
