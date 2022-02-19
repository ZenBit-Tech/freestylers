import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user';
import { ExampleEntity } from './entities/example.entity';
import { UserService } from './example.service';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @Post()
  cerate(@Body() userDto: CreateUserDto): Promise<ExampleEntity> {
    return this.usersService.addUser(userDto);
  }

  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }
}
