import { Module } from '@nestjs/common';
import { LettersModule } from './letters/letters.module';

@Module({
  imports: [LettersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
