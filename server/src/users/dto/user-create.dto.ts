import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserCreateDto {
  @IsNotEmpty()
  @IsString({ each: true })
  username: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
