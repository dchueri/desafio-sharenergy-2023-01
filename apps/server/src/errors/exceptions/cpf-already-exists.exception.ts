import { HttpException } from '@nestjs/common';

export class CpfAlreadyExistsException extends HttpException {
  constructor() {
    super({ message: 'user with this cpf already exists' }, 422);
  }
}
