import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ErrorsInterceptor } from 'src/errors/errors.interceptor';
import { ClientsService } from './clients.service';
import { ClientCreateDto } from './dto/client-create.dto';
import { ClientUpdateDto } from './dto/client-update.dto';

@UseInterceptors(ErrorsInterceptor)
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  @HttpCode(200)
  async getAll() {
    return this.clientsService.getAll();
  }

  @Post()
  @HttpCode(201)
  async create(@Body() clientCreateData: ClientCreateDto) {
    const client = await this.clientsService.create(clientCreateData);
    return client;
  }

  @Patch(':id')
  @HttpCode(200)
  async update(
    @Param('id') clientId: string,
    @Body() clientUpdateData: ClientUpdateDto,
  ) {
    return this.clientsService.update(clientId, clientUpdateData);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') clientId: string) {
    return this.clientsService.delete(clientId);
  }
}
