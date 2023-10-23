import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
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
  species: string[];
  @Prop()
  starships: string[];
  @Prop()
  vehicles: string[];
  @Prop()
  characters: string[];
  @Prop()
  planets: string[];
  @Prop()
  url: string;
  @Prop()
  created: string;
  @Prop()
  edited: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);

// movie.interface.ts
export interface Movie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;
}