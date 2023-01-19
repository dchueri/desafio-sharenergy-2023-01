import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { UserRandom } from '../interfaces/user-random.interface';

@Injectable()
export class UsersRandomService {
  private readonly url = 'https://randomuser.me/api/';

  async getUsersList(pageNumber: number, numberOfResultsPerPage: number) {
    let usersList;
    let parsedUserList;
    if (pageNumber || numberOfResultsPerPage) {
      usersList = await this.findUsers(pageNumber, numberOfResultsPerPage);
      parsedUserList = this.parseUserList(usersList);
      return parsedUserList;
    }
    usersList = await this.findUsersList();
    parsedUserList = this.parseUserList(usersList);
    return parsedUserList;
  }

  async findUsers(
    pageNumber: number,
    numberOfResultsPerPage: number,
  ): Promise<Array<any>> {
    const response = await axios.get(this.url, {
      params: {
        page: pageNumber,
        results: numberOfResultsPerPage,
        seed: 'abc',
      },
    });

    return response.data.results;
  }

  async findUsersList(): Promise<Array<any>> {
    const response = await axios.get(this.url, {
      params: {
        results: 1000,
        seed: 'abc',
        nat: 'br',
      },
    });

    return response.data.results;
  }

  parseUserList(userList: UserRandom[]) {
    const parsedUserList = userList.map((user: any): UserRandom => {
      return {
        picture: user.picture.large,
        fullName: `${user.name.first} ${user.name.last}`,
        email: user.email,
        username: user.login.username,
        age: user.dob.age,
      };
    });
    return parsedUserList;
  }
}
