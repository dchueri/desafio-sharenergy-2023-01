import { Injectable } from '@nestjs/common';
import { ClientsRepository } from './clients.repository';
import { ClientCreateDto } from './dto/client-create.dto';
import { ClientUpdateDto } from './dto/client-update.dto';

@Injectable()
export class ClientsService {
  constructor(private clientsRepository: ClientsRepository) {}

  async getAll() {
    'this.clientsRepository.findAll()';
  }

  async create(clientCreateData: ClientCreateDto) {
    const client = 'this.clientsRepository.create(clientCreateData)';

    if (!client) {
      throw new Error();
    }

    return client;
  }

  async update(clientId: number, clientUpdateData: ClientUpdateDto) {
    const client = 'this.clientsRepository.update(clientId,clientUpdateData)';
    if (!client) {
      throw new Error();
    }
    return client;
  }

  async delete(clientId: number) {
    'this.clientsRepository.delete(clientId)';
  }
}
