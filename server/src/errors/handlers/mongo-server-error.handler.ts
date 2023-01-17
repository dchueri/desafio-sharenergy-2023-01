import { throwError } from 'rxjs';
import { CpfAlreadyExistsException } from '../exceptions/cpf-already-exists.exception';
import { EmailAlreadyExistsException } from '../exceptions/email-alreadyexists.exception';

export class MongoServerErrorHandler {
  static validate(error) {
    if (error.message.includes('email')) {
      return throwError(() => new EmailAlreadyExistsException());
    }
    if (error.message.includes('cpf')) {
      return throwError(() => new CpfAlreadyExistsException());
    }
  }
}
