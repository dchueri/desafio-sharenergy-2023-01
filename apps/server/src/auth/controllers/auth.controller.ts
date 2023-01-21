import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { IsPublic } from '../decorators/is-public.decorator';
import { AuthRequestDto } from '../dto/auth-request.dto';
import { AuthRequest } from '../requests/auth.request';
import { AuthService } from '../services/auth.service';

@ApiBearerAuth('access-token')
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiBody({ type: AuthRequestDto })
  async login(@Body() user: AuthRequest) {
    const jwt = this.authService.login(user);
    if (!jwt) {
      throw new NotFoundException({ message: 'user not found' });
    }
    return jwt;
  }
}
