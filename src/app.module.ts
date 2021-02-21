import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MechanicModule } from './mechanic/mechanic.module';
import { CarModule } from './car/car.module';
import { GarageModule } from './garage/garage.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'workshop',
      entities: [`${__dirname}/**/**/*.entity{.ts,.js}`],
      synchronize: true,
      logging: true,
    }),
    MechanicModule,
    CarModule,
    GarageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
