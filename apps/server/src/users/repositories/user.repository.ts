import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCreateDto } from '../dto/user-create.dto';
import { UserUpdateDto } from '../dto/user-update.dto';
import { User, UserDocument } from '../schema/user.schema';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) public userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find({}, 'username').exec();
  }

  async findOneById(userId: string): Promise<User> {
    return await this.userModel.findById(userId, 'username').exec();
  }

  async findOneByUsername(username: string): Promise<User> {
    return await this.userModel.findOne({ username });
  }

  async create(userCreateDto: UserCreateDto): Promise<User> {
    const user = await this.userModel.create(userCreateDto);
    return user;
  }

  async update(userId: string, userUpdateDto: UserUpdateDto): Promise<User> {
    return await this.userModel
      .findByIdAndUpdate(userId, userUpdateDto, { new: true })
      .select('username')
      .exec();
  }

  async delete(userId: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(userId).exec();
  }
}
