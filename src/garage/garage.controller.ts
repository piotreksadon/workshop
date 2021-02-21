import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { GarageService } from './garage.service';
import { CreateGarageDto } from './dto/create-garage.dto';
import { UpdateGarageDto } from './dto/update-garage.dto';

@Controller('garage')
export class GarageController {
  constructor(private readonly garageService: GarageService) {}

  @Post()
  create(@Body() createGarageDto: CreateGarageDto) {
    return this.garageService.create(createGarageDto);
  }

  @Get()
  findAll() {
    return this.garageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.garageService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGarageDto: UpdateGarageDto) {
    return this.garageService.update(+id, updateGarageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.garageService.remove(+id);
  }
}
