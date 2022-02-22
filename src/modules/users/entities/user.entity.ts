import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  COMPANY = 'company',
  SEEKER = 'seeker',
}

@Entity()
export class ExampleEntity {
  @ApiProperty({ example: '1', description: 'Уникальный индетификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Jony', description: 'Имя' })
  @Column({ type: 'varchar' })
  firstName: string;

  @ApiProperty({ example: 'Barner', description: 'Фамилия' })
  @Column({ type: 'varchar' })
  lastName: string;

  @ApiProperty({ example: 'JonyB', description: 'Никнейм' })
  @Column({ type: 'varchar' })
  userName: string;

  @ApiProperty({
    example: 'example@gmail.com',
    description: 'Электронная почта',
  })
  @Column({ type: 'varchar' })
  email: string;

  @ApiProperty({ example: '*******', description: 'Пароль' })
  @Column({ type: 'varchar' })
  password: string;

  @ApiProperty({ example: +380505550555, description: 'Телефон' })
  @Column({ type: 'varchar' })
  phone: number;

  @ApiProperty({ example: true, description: 'Имя' })
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.SEEKER,
  })
  position: UserRole;
}
