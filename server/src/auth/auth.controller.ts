import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { IsPublic } from './decorators/is-public.decorator';
import { AuthRequest } from './requests/auth.request';
import { AuthService } from './services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() user: AuthRequest) {
    const jwt = this.authService.login(user);
    if (!jwt) {
      throw new NotFoundException({ message: 'user not found' });
    }
    return jwt;
  }
}
