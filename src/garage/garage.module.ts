import { Module } from '@nestjs/common';
import { GarageService } from './garage.service';
import { GarageController } from './garage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GarageEntity } from './entities/garage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GarageEntity])],
  controllers: [GarageController],
  providers: [GarageService]
})
export class GarageModule {}
