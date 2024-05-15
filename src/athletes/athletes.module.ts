import { Module } from '@nestjs/common';
import { AthletesService } from './services/athletes.service';
import { AthletesController } from './controllers/athletes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Athlete } from './entities/athlete.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Athlete])
  ],
  controllers: [AthletesController],
  providers: [AthletesService],
})
export class AthletesModule {}
