import { HttpException } from '@nestjs/common';

export class InvalidFieldsException extends HttpException {
  constructor(fields: string[]) {
    super({ message: 'Client validation failed', fields }, 422);
  }
}
