import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [`${__dirname}/**/entities/*.entity*{.ts,.js}`],
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
