import { IsNotEmpty, IsNumber } from 'class-validator';

export class RandomUsersDto {
  @IsNotEmpty()
  @IsNumber()
  pageNumber: number;

  @IsNotEmpty()
  @IsNumber()
  numberOfResultsPerPage: number;
}
