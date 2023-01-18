import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CurrentUser } from '../decorators/current-user.decorator';
import { UserCreateDto } from '../dto/user-create.dto';
import { UserUpdateDto } from '../dto/user-update.dto';
import UsernameAlreadyRegisteredException from '../exceptions/username-already-registered.exception';
import { User } from '../schema/user.schema';
import { UserService } from '../service/user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Get()
  @HttpCode(200)
  async getAll(): Promise<User[]> {
    return await this.userService.getAll();
  }

  @Get('me')
  getMe(@CurrentUser() user: User): User {
    return user;
  }

  @IsPublic()
  @Post()
  async create(@Body() userToCreate: UserCreateDto): Promise<User> {
    try {
      return await this.userService.createUser(userToCreate);
    } catch {
      throw new UsernameAlreadyRegisteredException(userToCreate.username);
    }
  }

  @Put(':id')
  async update(
    @Param('id') userId: string,
    @Body() userToUpdate: UserUpdateDto,
  ): Promise<User> {
    return await this.userService.updateUser(userId, userToUpdate);
  }
}
