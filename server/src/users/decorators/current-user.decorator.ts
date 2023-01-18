import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthRequest } from '../../auth/requests/auth.request';
import { User } from '../schema/user.schema';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const user = context.switchToHttp().getRequest<AuthRequest>();

    return user;
  },
);
