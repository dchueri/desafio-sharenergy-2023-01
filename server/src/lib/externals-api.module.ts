import { Module } from '@nestjs/common';
import { CatImagesService } from './cat/cat-images.service';
import { DogImagesService } from './dog/dog-images.service';
import { ExternalsApiController } from './externals-api.controller';
import { UsersRandomService } from './random-users/random-users.service';

@Module({
  controllers: [ExternalsApiController],
  providers: [CatImagesService, DogImagesService, UsersRandomService],
})
export class ExternalsApiModule {}
