import { throwError } from 'rxjs';
import { InvalidFieldsException } from '../exceptions/invalid-fields.exception';
import { Validations } from '../validations';

export class ValidationErrorHandler {
  static validate(error) {
    const fields = Validations.getFieldsOfClassValidatorErrorMessage(
      error.message,
    );
    return throwError(() => new InvalidFieldsException(fields));
  }
}
