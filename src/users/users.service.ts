import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { Model } from "mongoose";
import { InjectConnection } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
const ObjectId = require('mongoose').Types.ObjectId;

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
    ) {}
  
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userModel.create(createUserDto);
    return user;
}

  async findAll(): Promise<User[]>  {
    return this.userModel.find();
  }

  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({ username: username }).exec();
  }
  /*
  update(id: string, updateUserDto: UpdateUserDto) {
    let user = this.userModel.findOne({ _id: id }).exec();
    // Tirar error cuando no encuentra el user
    return `This action updates a #${id} user`;
  }*/

  async remove(id: string) {
    const user = await this.userModel.findByIdAndRemove({ _id: id }).exec()
    return `OK`;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.userModel.findOne({ username: loginUserDto.username }).exec()
    if(!(user.password == loginUserDto.password)) return "Usuario o contrasena incorretos"
    return `OK`;
  }
}
