export class Validations {
  public static getFieldsOfClassValidatorErrorMessage(errorMessage: string) {
    const message = errorMessage.replace('Client validation failed: ', '');
    const fields = message.split(',');
    fields.forEach((field, index) => {
      field[0] == ' ' ? (fields[index] = field.slice(1)) : null;
    });
    return fields;
  }
}
