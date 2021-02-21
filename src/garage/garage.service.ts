import { Injectable } from '@nestjs/common';
import { CreateGarageDto } from './dto/create-garage.dto';
import { UpdateGarageDto } from './dto/update-garage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MechanicEntity } from '../mechanic/entity/mechanic.entity';
import { Repository } from 'typeorm';
import { GarageEntity } from './entities/garage.entity';

@Injectable()
export class GarageService {
  constructor(
    @InjectRepository(GarageEntity)
    private garageRepository: Repository<GarageEntity>,
  ){}
  create(createGarageDto: CreateGarageDto) {
    return 'This action adds a new garage';
  }

  findAll() {
    return this.garageRepository.find({ relations: ['mechanics', 'mechanics.cars'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} garage`;
  }

  update(id: number, updateGarageDto: UpdateGarageDto) {
    return `This action updates a #${id} garage`;
  }

  remove(id: number) {
    return `This action removes a #${id} garage`;
  }
}
