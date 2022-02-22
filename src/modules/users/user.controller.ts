import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user';
import { ExampleEntity } from './entities/user.entity';
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

  @ApiOperation({ summary: 'Получение пользывателя по id' })
  @ApiResponse({ status: 200, type: ExampleEntity })
  @Get(':id')
  getOne(@Param('id') id: string): Promise<ExampleEntity> {
    // const user: string = this.usersService.getById(id);
    return this.usersService.getById(id);
  }

  @ApiOperation({ summary: 'Удалить пользывателя по id' })
  @ApiResponse({ status: 200, type: ExampleEntity })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<string> {
    return this.usersService.remove(id);
  }

  @ApiOperation({ summary: 'Oбновление пользователя по id' })
  @ApiResponse({ status: 200, type: ExampleEntity })
  @Put(':id')
  update(
    @Param('id') id: string,
    { fullName, email, password, position }: CreateUserDto,
  ): Promise<ExampleEntity> {
    console.log(id);

    const User = new CreateUserDto();

    User.email = email;
    User.fullName = fullName;
    User.password = password;
    User.position = position;

    return this.usersService.updateUser(User);
  }
}
