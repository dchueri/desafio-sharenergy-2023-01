import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { HydratedDocument } from 'mongoose';
import { IClient } from '../interfaces/IClient.interface';

export type ClientDocument = HydratedDocument<IClient>;

@Schema()
export class Client {
  @Prop({ type: String, required: true })
  name: string;

  @Exclude()
  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: String, required: true })
  address: string;

  @Prop({
    type: String,
    required: true,
    minLength: 11,
    maxlength: 11,
    unique: true,
  })
  cpf: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
