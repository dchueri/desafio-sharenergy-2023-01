import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CatImagesService } from './cat/cat-images.service';
import { DogImagesService } from './dog/dog-images.service';

@Controller('externals')
export class ExternalsApiController {
  constructor(
    private readonly catService: CatImagesService,
    private readonly dogService: DogImagesService,
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
  async getDogImage(): Promise<string> {
    return await this.dogService.getRandomImage();
  }
}
