import { Injectable } from '@nestjs/common';
import { CreateLetterDto } from './dto/create-letter.dto';
import { UpdateLetterDto } from './dto/update-letter.dto';

@Injectable()
export class LettersService {
  create(createLetterDto: CreateLetterDto) {
    return 'This action adds a new letter';
  }

  findAll() {
    const letters = [
      {
        id: 1,
        title: 'Test Letter',
        content: 'Test Letter Content',
      },
    ];
    return letters;
  }

  findOne(id: number) {
    return `This action returns a #${id} letter`;
  }

  update(id: number, updateLetterDto: UpdateLetterDto) {
    return `This action updates a #${id} letter`;
  }

  remove(id: number) {
    return `This action removes a #${id} letter`;
  }
}
