import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
const ObjectId = require('mongoose').Types.ObjectId;

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  _id: ObjectId;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);