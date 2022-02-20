import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user';
import { ExampleEntity } from './entities/example.entity';
import { UserService } from './user.service';

@ApiTags('Пользователи')
@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}
  @ApiOperation({ summary: 'Добавление пользователя в базу данных' })
  @ApiResponse({ status: 200, type: ExampleEntity })
  @Post()
  cerate(@Body() userDto: CreateUserDto): Promise<ExampleEntity> {
    return this.usersService.addUser(userDto);
  }
  @ApiOperation({ summary: 'Получение всех пользователей' })
  @ApiResponse({ status: 200, type: ExampleEntity })
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }
}
