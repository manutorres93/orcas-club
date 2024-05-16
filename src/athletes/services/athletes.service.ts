import { Injectable } from '@nestjs/common';
import { CreateAthleteDto } from '../dto/create-athlete.dto';
import { UpdateAthleteDto } from '../dto/update-athlete.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Athlete } from '../entities/athlete.entity';

@Injectable()
export class AthletesService {

  constructor(
    @InjectRepository(Athlete)
    private readonly athleteRepository: Repository<Athlete>,
  ) {}
  async create(createAthleteDto: CreateAthleteDto): Promise<Athlete> {
    
    const athlete = this.athleteRepository.create(createAthleteDto)
    return await this.athleteRepository.save(athlete)
  }

  async findAll() {
    return await this.athleteRepository.find();
  }

  async findOne(id: number) {
    const athlete = await this.athleteRepository.findOneBy( {id} )
    return athlete
  }

  async update(id: number, updateAthleteDto: UpdateAthleteDto) {
    const athlete= await this.athleteRepository.findOneBy({id})
    this.athleteRepository.merge(athlete, updateAthleteDto)
    return await this.athleteRepository.save(athlete)
  }

  async remove(id: number) {
    return await this.athleteRepository.delete({id})
  }
}
