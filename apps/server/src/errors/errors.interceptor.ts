import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { CastErrorHandler } from './handlers/cast-error.handler';
import { MongoServerErrorHandler } from './handlers/mongo-server-error.handler';
import { ValidationErrorHandler } from './handlers/validarion-error.handler';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error.name == 'ValidationError') {
          return ValidationErrorHandler.validate(error);
        }
        if (error.name == 'MongoServerError') {
          return MongoServerErrorHandler.validate(error);
        }
        if (error.name == 'CastError') {
          return CastErrorHandler.validate(error);
        }
        console.log(error);
      }),
    );
  }
}
