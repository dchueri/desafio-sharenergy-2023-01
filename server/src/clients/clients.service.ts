import { Injectable } from '@nestjs/common';
import { ClientsRepository } from './clients.repository';
import { ClientCreateDto } from './dto/client-create.dto';
import { ClientUpdateDto } from './dto/client-update.dto';
import { Client } from './schema/client.schema';

@Injectable()
export class ClientsService {
  constructor(private clientsRepository: ClientsRepository) {}

  async getAll(): Promise<Client[]> {
    return await this.clientsRepository.findAll();
  }

  async getOne(clientId: string): Promise<Client> {
    return await this.clientsRepository.findOneById(clientId);
  }

  async create(clientCreateData: ClientCreateDto): Promise<Client> {
    return await this.clientsRepository.create(clientCreateData);
  }

  async update(
    clientId: string,
    clientUpdateData: ClientUpdateDto,
  ): Promise<Client> {
    return await this.clientsRepository.update(clientId, clientUpdateData);
  }

  async delete(clientId: string): Promise<void> {
    await this.clientsRepository.delete(clientId);
  }
}
