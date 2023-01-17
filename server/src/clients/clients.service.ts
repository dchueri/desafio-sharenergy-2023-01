import { Injectable } from '@nestjs/common';
import { Client } from './client.model';
import { ClientsRepository } from './clients.repository';
import { ClientCreateDto } from './dto/client-create.dto';
import { ClientUpdateDto } from './dto/client-update.dto';

@Injectable()
export class ClientsService {
  constructor(private clientsRepository: ClientsRepository) {}

  async getAll(): Promise<Client[]> {
    return await this.clientsRepository.findAll();
  }

  async getOne(clientId: string): Promise<Client> {
    return await this.clientsRepository.findOneById(clientId);
  }

  async create(clientCreateData: ClientCreateDto) {
    return await this.clientsRepository.create(clientCreateData);
  }

  async update(clientId: string, clientUpdateData: ClientUpdateDto) {
    return await this.clientsRepository.update(clientId, clientUpdateData);
  }

  async delete(clientId: string) {
    return await this.clientsRepository.delete(clientId);
  }
}
