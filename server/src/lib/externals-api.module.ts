import { Module } from '@nestjs/common';
import { CatImagesService } from './cat/cat-images.service';
import { DogImagesService } from './dog/dog-images.service';
import { ExternalsApiController } from './externals-api.controller';

@Module({
  controllers: [ExternalsApiController],
  providers: [CatImagesService, DogImagesService],
})
export class ExternalsApiModule {}
