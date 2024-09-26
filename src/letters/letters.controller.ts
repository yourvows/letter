import { Controller, Post, Body, Get } from '@nestjs/common'
import { LettersService } from './letters.service'
import { CreateLetterDto } from './dto/create-letter.dto'

@Controller('letters')
export class LettersController {
	constructor(private readonly lettersService: LettersService) {}

	@Post()
	async create(@Body() dto: CreateLetterDto) {
		return this.lettersService.create(dto)
	}

	@Get()
	async getAll() {
		return this.lettersService.getAll()
	}
}
