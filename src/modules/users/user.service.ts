import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user';
import { ExampleEntity } from './entities/user.entity';
// import { User } from './user.module';

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

  async getById(id: string): Promise<ExampleEntity> {
    try {
      const user = await this.usersRepository.findOne(id);
      return user;
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

  async remove(id: string): Promise<string> {
    try {
      const user = await this.usersRepository.findOne(id);
      if (!user) {
        return 'This user does not exist in the database';
      }
      await this.usersRepository.delete(id);
      return 'Successful removal ✅';
    } catch (e) {
      return e;
    }
  }
  async updateUser(dto: CreateUserDto): Promise<ExampleEntity> {
    console.log(dto);

    try {
      await this.usersRepository.findOneOrFail(dto.id);
      return this.usersRepository.save(dto);
    } catch (e) {
      return e;
    }
  }
}
