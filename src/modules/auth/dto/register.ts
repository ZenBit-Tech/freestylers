import { ApiProperty } from '@nestjs/swagger';

export class registerDto {
  id: number;
  fullName: string;
  @ApiProperty({ example: 'example@gmail.com' })
  email: string;
  @ApiProperty({ example: 'Пароль пользователя' })
  password: string;
  @ApiProperty({ example: 'Выбор позиции (freelancer | job owner)' })
  position: () => string;
}
