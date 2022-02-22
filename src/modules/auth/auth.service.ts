import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { AuthEntity } from './entity/auth-entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: AuthEntity) {
    const payload = { id: userDto.id };
    console.log(payload);

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
  async registration(userDto: AuthEntity) {
    console.log(userDto);
  }
}
