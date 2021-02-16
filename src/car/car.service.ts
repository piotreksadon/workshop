import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarEntity } from './entity/car.entity';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarEntity)
    private carRepository: Repository<CarEntity>,
  ) {}
  create(data: CreateCarDto) {
    return this.carRepository.save({
      brand: data.brand,
      model: data.model,
      productionYear: data.productionYear,
      color: data.color,
      repairNote: data.repairNote,
    });
  }

  findAll() {
    return this.carRepository.find();
  }

  findOne(id: number) {
    return this.carRepository.findOne(+id);
  }

  update(id: number, data: UpdateCarDto) {
    return this.carRepository.save({
      brand: data.brand,
      model: data.model,
      productionYear: data.productionYear,
      color: data.color,
      repairNote: data.repairNote,
    });
  }

  remove(id: number) {
    return this.carRepository.delete(id);
  }
}
