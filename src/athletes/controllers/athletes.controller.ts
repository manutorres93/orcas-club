import { Controller, Get, Post, Body, Patch, Param, Delete,Query, BadRequestException, ParseIntPipe } from '@nestjs/common';
import { AthletesService } from '../services/athletes.service';
import { CreateAthleteDto } from '../dto/create-athlete.dto';
import { UpdateAthleteDto } from '../dto/update-athlete.dto';


@Controller('athletes')
export class AthletesController {
  constructor(private readonly athletesService: AthletesService) {}

  @Post()
  create(@Body() createAthleteDto: CreateAthleteDto)
   {
    return this.athletesService.create(createAthleteDto);
  }

  @Get('search')
  findByParam(@Query('name') name: string,
  @Query('orderBy') orderBy: string,
    @Query('order') order:'ASC' | 'DESC' = 'ASC',
    @Query('page')page: number,
    @Query('pageSize') pageSize: number) {
    return this.athletesService.findByParam(name,orderBy, order,page, pageSize);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.athletesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAthleteDto: UpdateAthleteDto) {
    return this.athletesService.update(+id, updateAthleteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.athletesService.remove(+id);
  }

  @Get()
  findAll() {
    return this.athletesService.findAll();
  }

  

  


}
