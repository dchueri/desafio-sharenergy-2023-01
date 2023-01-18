import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/schema/user.schema';
import { UserService } from '../../users/service/user.service';
import { UserPayload } from '../dto/user-payload.dto';
import { UserToken } from '../dto/user-token-dto';
import { IAuthService } from '../interfaces/auth-service.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByUsername(username);
    if (user) {
      const isValidPassword = await this.comparePassword(
        password,
        user.password,
      );
      if (isValidPassword) {
        return {
          ...user,
          password: '***',
        };
      }
    }
    throw new Error('username or password provided is incorrect');
  }

  async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  resetPassword(userId: string, email: string): boolean {
    return true;
  }

  validateUsername(email: string): boolean {
    return true;
  }

  login(user: User): UserToken {
    const payload: UserPayload = {
      username: user.username,
    };

    const jwtToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
    });
    return {
      access_token: jwtToken,
    };
  }
}
