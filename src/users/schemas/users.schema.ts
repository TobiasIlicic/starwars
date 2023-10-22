import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
import { Role } from 'src/enums/role.enum';

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
  
  @Prop()
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);