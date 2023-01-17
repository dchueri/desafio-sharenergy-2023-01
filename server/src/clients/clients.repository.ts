import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from './client.model';

@Injectable()
export class ClientsRepository {
  constructor(
    @InjectModel(Client.name) public clientModel: Model<ClientDocument>,
  ) {}
}
