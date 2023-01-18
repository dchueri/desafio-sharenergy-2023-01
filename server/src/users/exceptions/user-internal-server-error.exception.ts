import { InternalServerErrorException } from '@nestjs/common';

class UserInternalServerErrorException extends InternalServerErrorException {
  constructor(userEmail: string) {
    super('Oh no :( error at a user: ' + userEmail);
  }
}

export default UserInternalServerErrorException;
