import { HttpException } from '@nestjs/common';

export class EmailAlreadyExistsException extends HttpException {
  constructor() {
    super({ message: 'user with this email already exists' }, 422);
  }
}
