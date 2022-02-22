import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Идентификатор, (type: number)' })
  id: number;
  @ApiProperty({ example: 'Valentina' })
  fullName: string;
  email: string;
  password: string;
  position: () => string;
}
