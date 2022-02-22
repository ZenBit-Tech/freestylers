import { ApiProperty } from '@nestjs/swagger';

export class loginDto {
  id: number;
  fullName: string;
  @ApiProperty({ example: 'example@gmail.com' })
  email: string;
  @ApiProperty({ example: 'Пароль пользователя' })
  password: string;
  position: () => string;
}
