import { Controller, Get, HttpCode, Param, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { CatImagesService } from './cat/cat-images.service';
import { DogImagesService } from './dog/dog-images.service';
import { UserRandom } from './interfaces/user-random.interface';
import { RandomUsersDto } from './random-users.dto';
import { UsersRandomService } from './random-users/random-users.service';

@Controller('externals')
export class ExternalsApiController {
  constructor(
    private readonly catService: CatImagesService,
    private readonly dogService: DogImagesService,
    private readonly usersService: UsersRandomService,
  ) {}

  @Get('cat/:httpCode')
  @HttpCode(200)
  async getCatImage(
    @Param('httpCode') httpCode: number,
  ): Promise<Observable<any>> {
    return this.catService.getImage(httpCode);
  }

  @Get('dog')
  @HttpCode(200)
  async getDogImage(): Promise<{ data: string }> {
    const dogImage = await this.dogService.getRandomImage();
    return { data: dogImage };
  }

  @IsPublic()
  @Get('random-users')
  @HttpCode(200)
  async getRandomUsers(@Query() query: RandomUsersDto): Promise<UserRandom[]> {
    return await this.usersService.getUsersList(
      query.pageNumber,
      query.numberOfResultsPerPage,
    );
  }
}
