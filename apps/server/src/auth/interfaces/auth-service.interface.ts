import { User } from '../../users/schema/user.schema';

export interface IAuthService {
  validateUser(username: string, password: string): Promise<User | null>;

  resetPassword(userId: string, username: string): boolean;

  validateUsername(username: string): boolean;
}
