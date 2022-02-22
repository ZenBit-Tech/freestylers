import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreateUserDto) {
    const payload = { id: userDto.id };
    console.log(payload);

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
  async registration(userDto: CreateUserDto) {
    console.log(userDto);
  }
}
