import { Controller, Get } from '@nestjs/common';
import { IndexService } from './index.service';

@Controller('index')
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get()
  getIndex(): string {
    return '<h1>Welcome to the Index Page!</h1>';
  }
}
