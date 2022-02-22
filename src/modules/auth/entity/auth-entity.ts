import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  FREELANCER = 'freelancer',
  JOBOWNER = 'job owner',
}

@Entity()
export class AuthEntity {
  @ApiProperty({ example: '1', description: 'Уникальный индетификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Jony Walker', description: 'Имя' })
  @Column({ nullable: true, type: 'varchar' })
  fullName?: string;

  @ApiProperty({
    example: 'example@gmail.com',
    description: 'Электронная почта',
  })
  @Column({ type: 'varchar' })
  email: string;

  @ApiProperty({ example: '*******', description: 'Пароль' })
  @Column({ nullable: false, type: 'varchar' })
  password: string;

  @ApiProperty({
    example: 'freelancer | job owner',
    description: 'Выбрать один позиции',
  })
  @ApiProperty({ example: true, description: 'Имя' })
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.FREELANCER,
  })
  position: UserRole;
}
