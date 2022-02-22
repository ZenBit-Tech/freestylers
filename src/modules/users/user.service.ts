import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user';
import { ExampleEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(ExampleEntity)
    private usersRepository: Repository<ExampleEntity>,
  ) {}

  async getAllUsers() {
    try {
      const users = await this.usersRepository.createQueryBuilder().getMany();
      return users;
    } catch (e) {
      return e;
    }
  }

  async addUser(dto: CreateUserDto): Promise<ExampleEntity> {
    try {
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(ExampleEntity)
        .values(dto)
        .execute();
    } catch (error) {
      return error.message;
    }
  }
}
