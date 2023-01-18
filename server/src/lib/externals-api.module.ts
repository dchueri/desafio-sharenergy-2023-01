import { Module } from '@nestjs/common';
import { CatService } from './cat/cat.service';
import { ExternalsApiController } from './externals-api.controller';

@Module({
  controllers: [ExternalsApiController],
  providers: [CatService],
})
export class ExternalsApiModule {}
