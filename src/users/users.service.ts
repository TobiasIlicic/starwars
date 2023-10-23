import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
    let userExists = await this.userModel.findOne({ username: createUserDto.username })
    if (userExists) {
      throw new HttpException('El username que esta ingresando ya existe', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    let modifiedDto = {
      ...createUserDto,
      _id: new ObjectId(),
      roles: ['Usuario Regular'], // Asigno el rol por default
    };
    modifiedDto.password = await bcrypt.hash(modifiedDto.password, 10);
    let user = await this.userModel.create(modifiedDto);
    user.password = '' // Borro la contrasena antes de devolverla
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findOne(username: string): Promise<User> {
    return await this.userModel.findOne({ username: username })
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let user = await this.userModel.findOne({ _id: id })
    if (!user) {
      throw new HttpException('El usuario que esta intentando actualizar no existe.', HttpStatus.INTERNAL_SERVER_ERROR);
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
