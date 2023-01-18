import { UnprocessableEntityException } from '@nestjs/common';

class UsernameAlreadyRegisteredException extends UnprocessableEntityException {
  constructor(username: string) {
    super(`username ${username} already exists`);
  }
}

export default UsernameAlreadyRegisteredException;
