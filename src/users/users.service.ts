import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from "mongoose";
import * as bcrypt from 'bcrypt';
const ObjectId = require('mongoose').Types.ObjectId;

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    let modifiedDto = {
      ...createUserDto,
      _id: new ObjectId(),
      roles: ['Usuario Regular'], // Asigno el rol por default
    }; 
    modifiedDto.password = await bcrypt.hash(modifiedDto.password, 10);
    let user = await this.userModel.create(modifiedDto);
    delete user.password
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({ username: username }).exec();
  }
  
  update(id: string, updateUserDto: UpdateUserDto) {
    let user = this.userModel.findOne({ _id: id }).exec();
    if (!user) {
      throw new Error('La pelicula que esta intentando actualizar no existe.');
    }
    // Actualizo solo los campos que me mandan
    Object.keys(updateUserDto).forEach((key) => {
      if (updateUserDto[key] !== undefined) {
        user[key] = updateUserDto[key];
      }
    });
  }

  async remove(id: string): Promise<string> {
    const user = await this.userModel.findByIdAndRemove({ _id: id }).exec()
    return `OK`;
  }
}
