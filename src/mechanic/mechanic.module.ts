import { Module } from '@nestjs/common';
import { MechanicController } from './mechanic.controller';
import { MechanicService } from './mechanic.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MechanicEntity } from './entity/mechanic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MechanicEntity])],
  controllers: [MechanicController],
  providers: [MechanicService],
})
export class MechanicModule {}
