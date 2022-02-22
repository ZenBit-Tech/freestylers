import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Идентификатор, (type: number)' })
  id: number;
  @ApiProperty({ example: 'Valentina' })
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  phone: number;
  position: () => string;
}
