import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { UserRandom } from '../interfaces/user-random.interface';

@Injectable()
export class UsersRandomService {
  private readonly url = 'https://randomuser.me/api/';

  async getUsers(usersQuantity: number): Promise<UserRandom> {
    const response = await axios.get(this.url, {
      params: {
        results: usersQuantity,
      },
    });
    const modifiedUsers = response.data.results.map((user): UserRandom => {
      return {
        picture: user.picture.large,
        fullName: `${user.name.first} ${user.name.last}`,
        email: user.email,
        username: user.login.username,
        age: user.dob.age,
      };
    });
    return modifiedUsers;
  }
}
