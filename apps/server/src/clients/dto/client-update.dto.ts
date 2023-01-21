import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class ClientUpdateDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsPhoneNumber('BR')
  @IsNotEmpty()
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  address: string;

  @ApiProperty()
  @IsString()
  @Length(11)
  @IsNotEmpty()
  @IsOptional()
  cpf: string;
}
