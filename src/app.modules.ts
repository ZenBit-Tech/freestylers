import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.sevice';
import { AuthModule } from './modules/auth/auth.module';
import { ExampleEntity } from './modules/users/entities/user.entity';
import { User } from './modules/users/user.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      entities: [ExampleEntity],
      synchronize: true,
      autoLoadEntities: true,
    }),
    User,
    AuthModule,
  ],
})
export class AppModule {}
