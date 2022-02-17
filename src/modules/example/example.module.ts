import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleEntity } from './entities/example.entity';
// import { ExampleController } from './example.controller';
// import { ExampleService } from './example.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExampleEntity])],
  controllers: [],
  providers: [],
})
export class ExampleModule {}
