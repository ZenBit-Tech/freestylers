import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { loginDto } from '../auth/dto/login';
import { registerDto } from '../auth/dto/register';
import { AuthService } from './auth.service';
import { AuthEntity } from './entity/auth-entity';

@ApiTags('Авторизация/Регистрация')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Логинизация пользователя' })
  @ApiResponse({ status: 200, type: AuthEntity })
  @Post('/login')
  login(@Body() userDto: loginDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({ summary: 'Регистрация пользователя' })
  @ApiResponse({ status: 200, type: AuthEntity })
  @Post('/registration')
  registration(@Body() userDto: registerDto) {
    return this.authService.registration(userDto);
  }
}
