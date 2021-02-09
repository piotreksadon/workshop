import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { MechanicService } from './mechanic.service';
import { CreateMechanicDto } from './dto/create-mechanic.dto';
import { UpdateMechanicDto } from './dto/update-mechanic.dto';
import { MechanicIdDto } from './dto/mechanic-id.dto';

@Controller('mechanic')
export class MechanicController {
  constructor(private readonly mechanicService: MechanicService) {}

  @Post()
  create(@Body() data: CreateMechanicDto) {
    return this.mechanicService.create(data);
  }

  @Get()
  findAll() {
    return this.mechanicService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: MechanicIdDto) {
    return this.mechanicService.findOne(+params.id);
  }

  @Put(':id')
  update(@Param() params: MechanicIdDto, @Body() data: UpdateMechanicDto) {
    return this.mechanicService.update(+params.id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mechanicService.remove(+id);
  }
}
