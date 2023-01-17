import { Module } from '@nestjs/common';
import { ClientsModule } from 'src/clients/clients.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
