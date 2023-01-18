import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientCreateDto } from '../dto/client-create.dto';
import { ClientUpdateDto } from '../dto/client-update.dto';
import { Client, ClientDocument } from '../schema/client.schema';

@Injectable()
export class ClientsRepository {
  constructor(
    @InjectModel(Client.name) public clientModel: Model<ClientDocument>,
  ) {}

  async findAll(): Promise<Client[]> {
    return await this.clientModel.find().exec();
  }

  async findOneById(clientId: string): Promise<Client> {
    return await this.clientModel.findById(clientId).exec();
  }

  async findOneByEmail(email: string): Promise<Client> {
    return await this.clientModel.findOne({ email });
  }

  async create(clientCreateDto: ClientCreateDto): Promise<Client> {
    const client = await this.clientModel.create(clientCreateDto);
    return client;
  }

  async update(
    clientId: string,
    clientUpdateDto: ClientUpdateDto,
  ): Promise<Client> {
    return await this.clientModel
      .findByIdAndUpdate(clientId, clientUpdateDto, { new: true })
      .exec();
  }

  async delete(clientId: string): Promise<Client> {
    return await this.clientModel.findByIdAndDelete(clientId).exec();
  }
}
