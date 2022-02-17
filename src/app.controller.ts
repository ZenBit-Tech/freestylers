import { Controller } from '@nestjs/common';
import { AppService } from './app.sevice';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
