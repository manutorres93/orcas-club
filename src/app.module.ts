import { Module } from '@nestjs/common';
import { AthletesModule } from './athletes/athletes.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'brzst35gzwmepa5inz2s-mysql.services.clever-cloud.com',
    port: 3306,
    username: 'u1rnrslxuiukxfqt',
    password: 'tcQQcQVu6PYNR1naMVhb',
    database: 'brzst35gzwmepa5inz2s',
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
