import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CatService } from './cat/cat.service';

@Controller('externals')
export class ExternalsApiController {
  constructor(private readonly catService: CatService) {}

  @Get('cat/:httpCode')
  @HttpCode(200)
  async getAll(@Param('httpCode') httpCode: number): Promise<Observable<any>> {
    return this.catService.getImage(httpCode);
  }
}
