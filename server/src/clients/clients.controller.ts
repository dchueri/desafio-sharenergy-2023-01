import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientCreateDto } from './dto/client-create.dto';
import { ClientUpdateDto } from './dto/client-update.dto';

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
  async create(@Body() clienCreateData: ClientCreateDto) {
    return this.clientsService.create(clienCreateData);
  }

  @Patch(':id')
  @HttpCode(200)
  async update(
    @Param('id') clientId: number,
    @Body() clientUpdateData: ClientUpdateDto,
  ) {
    return this.clientsService.update(clientId, clientUpdateData);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') clientId: number) {
    return this.clientsService.delete(clientId);
  }
}
