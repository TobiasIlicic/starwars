import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(loginDto: LoginDto) {
    const user = await this.usersService.findOne(loginDto.username);
    if (!(await bcrypt.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user._id, username: user.username, roles: user.roles };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}