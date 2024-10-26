import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
//Injectando el constructor de user
@Injectable()
export class UsersService {constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){
  }
  //conectado al metodo post
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }
  //conectado al metodo con parametros
  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({
    where: { email },
    select: ['id', 'name', 'email', 'password'], 
    });
}

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy( {id} );
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }  

  remove(id: number) {
    return this.userRepository.delete(id);
  }
  
}
