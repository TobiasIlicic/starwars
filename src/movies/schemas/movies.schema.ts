import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
const ObjectId = require('mongoose').Types.ObjectId;

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop()
  _id: ObjectId;
  @Prop()
  title: string;
  @Prop()
  episode_id: number;
  @Prop()
  opening_crawl: string;
  @Prop()
  director: string;
  @Prop()
  producer: string;
  @Prop()
  release_date: Date;
  @Prop()
  species: [string];
  @Prop()
  starships: [string];
  @Prop()
  vehicles: [string];
  @Prop()
  characters: [string];
  @Prop()
  planets: [string];
  @Prop()
  url: string;
  @Prop()
  created: string;
  @Prop()
  edited: string

}

export const MovieSchema = SchemaFactory.createForClass(Movie);