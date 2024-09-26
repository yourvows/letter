import { Module } from '@nestjs/common';
import { LettersService } from './letters.service';
import { LettersController } from './letters.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [LettersController],
  providers: [LettersService, PrismaService],
})
export class LettersModule {}
