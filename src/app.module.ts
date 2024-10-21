import { Module } from '@nestjs/common';
import { LettersModule } from './letters/letters.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [LettersModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
