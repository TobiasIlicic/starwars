import { Injectable, HttpException, HttpStatus  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Movie } from './schemas/movies.schema';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

const ObjectId = require('mongoose').Types.ObjectId;

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<Movie>
  ) { }

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    let modifiedDto = {
      ...createMovieDto,
      _id: new ObjectId()
    };
    let movie = await this.movieModel.create(modifiedDto);
    return movie;
  }

  async findAll(): Promise<Movie[]> {
    return await this.movieModel.find()
  }

  async findOne(id: string): Promise<Movie> {
    let movie = await this.movieModel.findById(new ObjectId(id))
    if (!movie) {
      throw new HttpException('La pelicula no existe.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return movie
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    let movie = await this.movieModel.findById(new ObjectId(id));
    if (!movie) {
      throw new HttpException('La pelicula que esta intentando actualizar no existe.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    // Actualizo solo los campos que me mandan
    Object.keys(updateMovieDto).forEach((key) => {
      if (updateMovieDto[key] !== undefined) {
        movie[key] = updateMovieDto[key];
      }
    });

    return movie.save();
  }

  async remove(id: string): Promise<string> {
    const movie = await this.movieModel.findByIdAndRemove(new ObjectId(id)).exec()
    return `OK`;
  }
}
