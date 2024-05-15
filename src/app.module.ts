import { Module } from '@nestjs/common';
import { AthletesModule } from './athletes/athletes.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5431,
    username: 'riwi_user',
    password: 'abcd1234',
    database: 'books_2',
    autoLoadEntities: true,
    synchronize: true,
    retryDelay:3000,
    retryAttempts:10
  }),
  AthletesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
