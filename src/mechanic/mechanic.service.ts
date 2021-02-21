import { Injectable } from '@nestjs/common';
import { CreateMechanicDto } from './dto/create-mechanic.dto';
import { UpdateMechanicDto } from './dto/update-mechanic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MechanicEntity } from './entity/mechanic.entity';

@Injectable()
export class MechanicService {
  constructor(
    @InjectRepository(MechanicEntity)
    private mechanicRepository: Repository<MechanicEntity>,
  ) {
  }

  create(data: CreateMechanicDto) {
    return this.mechanicRepository.save({
      mechanicName: data.name,
      mechanicLastName: data.lastName,
      mechanicEmail: data.email,
      garageId: 1
    });
  }

  findAll() {
    return this.mechanicRepository.find();
  }

  findOne(id: number) {
    return this.mechanicRepository.findOne(+id, { relations: ["cars"] });
  }

  update(id: number, data: UpdateMechanicDto) {
    return this.mechanicRepository.save({
      mechanicName: data.name,
      mechanicLastName: data.lastName,
      mechanicEmail: data.email,
    });
  }

  remove(id: number) {
    return this.mechanicRepository.delete(id);
  }
}
