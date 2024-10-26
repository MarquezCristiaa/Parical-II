import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
//Injectando metodos
@Injectable()
export class ClientsService {constructor(@InjectRepository(Client) private readonly clientRepository: Repository<Client>){
    }

    // se alimenta de el metodo post
  create(createClientDto: CreateClientDto) {
    return this.clientRepository.save(createClientDto);
  }
   // se alimenta del metodo get
  findAll() {
    return this.clientRepository.find();
  }
   // se alimenta del metodo get con parametros
  findOne(id: number) {
    return this.clientRepository.findOneBy( {id} );
  }
   // se alimenta del metodo path
  update(id: number, updateClientDto: UpdateClientDto) {
    return this.clientRepository.update(id, updateClientDto);
  }
   // se alimenta del metodo  delete
  remove(id: number) {
    return this.clientRepository.delete(id);
  }
}
