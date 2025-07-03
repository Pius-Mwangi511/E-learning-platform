import { Module } from '@nestjs/common';
import { QiuzService } from './qiuz.service';
import { QiuzController } from './qiuz.controller';

@Module({
  controllers: [QiuzController],
  providers: [QiuzService],
})
export class QiuzModule {}
