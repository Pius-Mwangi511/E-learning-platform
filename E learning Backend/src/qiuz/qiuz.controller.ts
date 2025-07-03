import { Controller } from '@nestjs/common';
import { QiuzService } from './qiuz.service';

@Controller('qiuz')
export class QiuzController {
  constructor(private readonly qiuzService: QiuzService) {}
}
