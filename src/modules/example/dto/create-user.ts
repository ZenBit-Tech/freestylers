import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Идентификатор, (type: number)' })
  readonly id: number;
  @ApiProperty({ example: 'Valentina' })
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: number;
  readonly isActive: boolean;
}
