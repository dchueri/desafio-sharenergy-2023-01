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
import { ClientCreateDto } from '../dto/client-create.dto';
import { ClientUpdateDto } from '../dto/client-update.dto';
import { Client } from '../schema/client.schema';
import { ClientsService } from '../services/clients.service';

@UseInterceptors(ErrorsInterceptor)
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  @HttpCode(200)
  async getAll(): Promise<Client[]> {
    return await this.clientsService.getAll();
  }

  @Get(':id')
  @HttpCode(200)
  async getOneById(@Param('id') clientId: string): Promise<Client> {
    return await this.clientsService.getOne(clientId);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() clientCreateData: ClientCreateDto): Promise<Client> {
    const client = await this.clientsService.create(clientCreateData);
    return client;
  }

  @Patch(':id')
  @HttpCode(200)
  async update(
    @Param('id') clientId: string,
    @Body() clientUpdateData: ClientUpdateDto,
  ): Promise<Client> {
    return await this.clientsService.update(clientId, clientUpdateData);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') clientId: string): Promise<void> {
    return await this.clientsService.delete(clientId);
  }
}
