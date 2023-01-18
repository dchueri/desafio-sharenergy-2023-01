import { NotFoundException } from '@nestjs/common';

class UserNotFoundException extends NotFoundException {
  constructor(UserId: string) {
    super(`user with id ${UserId} not found`);
  }
}

export default UserNotFoundException;
