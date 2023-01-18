import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserCreateDto } from '../dto/user-create.dto';
import { UserUpdateDto } from '../dto/user-update.dto';
import { UsersRepository } from '../repositories/user.repository';
import { User } from '../schema/user.schema';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getAll(): Promise<User[]> {
    return await this.usersRepository.findAll();
  }

  async createUser(createUserDTO: UserCreateDto): Promise<User> {
    createUserDTO.password = await this.hashPassword(createUserDTO.password);

    return await this.usersRepository.create(createUserDTO);
  }

  async updateUser(
    userId: string,
    updateUserDTO: UserUpdateDto,
  ): Promise<User> {
    return await this.usersRepository.update(userId, updateUserDTO);
  }

  async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async findByUsername(username: string): Promise<User> {
    return await this.usersRepository.findOneByUsername(username);
  }

  async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOneById(id);
  }
}
