import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class ExampleEntity {
  @ApiProperty({ example: '1', description: 'Уникальный индетификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Jony', description: 'Имя' })
  @Column({ type: 'varchar' })
  firstName: string;

  @ApiProperty({ example: 'Jony', description: 'Имя' })
  @Column({ type: 'varchar' })
  lastName: string;

  @ApiProperty({ example: +380505550555, description: 'Телефон' })
  @Column({ type: 'varchar' })
  phone: number;

  @ApiProperty({ example: true, description: 'Имя' })
  @Column({ default: false })
  isActive: boolean;
}
