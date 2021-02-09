import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MechanicModule } from './mechanic/mechanic.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'workshop',
      entities: [`${__dirname}/**/entities/*.entity*{.ts,.js}`],
      synchronize: true,
      logging: true,
    }),
    MechanicModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
