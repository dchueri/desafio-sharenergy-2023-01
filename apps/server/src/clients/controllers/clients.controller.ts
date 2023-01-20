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
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { ErrorsInterceptor } from 'src/errors/errors.interceptor';
import { ClientCreateDto } from '../dto/client-create.dto';
import { ClientUpdateDto } from '../dto/client-update.dto';
import { Client } from '../schema/client.schema';
import { ClientsService } from '../services/clients.service';

@UseInterceptors(ErrorsInterceptor)
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @IsPublic()
  @Get()
  @HttpCode(200)
  async getAll(): Promise<Client[]> {
    return await this.clientsService.getAll();
  }
  @IsPublic()
  @Get(':id')
  @HttpCode(200)
  async getOneById(@Param('id') clientId: string): Promise<Client> {
    return await this.clientsService.getOne(clientId);
  }
  @IsPublic()
  @Post()
  @HttpCode(201)
  async create(@Body() clientCreateData: ClientCreateDto): Promise<Client> {
    const client = await this.clientsService.create(clientCreateData);
    return client;
  }
  @IsPublic()
  @Patch(':id')
  @HttpCode(200)
  async update(
    @Param('id') clientId: string,
    @Body() clientUpdateData: ClientUpdateDto,
  ): Promise<Client> {
    return await this.clientsService.update(clientId, clientUpdateData);
  }
  @IsPublic()
  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') clientId: string): Promise<void> {
    return await this.clientsService.delete(clientId);
  }
}
