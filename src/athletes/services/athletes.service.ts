import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAthleteDto } from '../dto/create-athlete.dto';
import { UpdateAthleteDto } from '../dto/update-athlete.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
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
/* 
  async findByParam(searchTerm: string, orderBy: string,
    order: 'ASC' | 'DESC',
    page: number,
    pageSize: number,  columnName: string ){
    
      const [result, total] = await this.athleteRepository.findAndCount( {
      where: {
      [columnName]: ILike(`%${searchTerm}%`)},
      order: { [orderBy]: order },
      take: pageSize,
      skip: (page - 1) * pageSize,
   },); */

  async findByParam(searchTerm: string, orderBy: string,
    order: 'ASC' | 'DESC',
    page: number,
    pageSize: number, columnName: string){
    
      const [result, total] = await this.athleteRepository.findAndCount( {
      where: {
      [columnName]: ILike(`%${searchTerm}%`)},
      order: { [orderBy]: order },
      take: pageSize,
      skip: (page - 1) * pageSize,
   },);
   
   

   return {
    data: result,
    total,
    page,
    pageCount: Math.ceil(total / pageSize)
  };
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

  async findAll(){
    return await this.athleteRepository.find();
  }


  
}
