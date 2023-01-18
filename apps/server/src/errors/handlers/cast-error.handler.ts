import { NotFoundException } from '@nestjs/common';
import { throwError } from 'rxjs';

export class CastErrorHandler {
  static validate(error) {
    if (error.message.includes('Client')) {
      return throwError(
        () => new NotFoundException({ message: 'client not found' }),
      );
    }
  }
}
