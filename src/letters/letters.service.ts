import { Injectable } from '@nestjs/common'
import { CreateLetterDto } from './dto/create-letter.dto'
import { PrismaService } from '../prisma.service'
import { UpdateLetterDto } from './dto/update-letter.dto'

@Injectable()
export class LettersService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CreateLetterDto) {
		const { title, body, recipientId, file } = dto

		return this.prisma.letter.create({
			data: { title, body, recipientId, file }
		})
	}

	async update(dto: UpdateLetterDto) {
		const { id, title, body, file } = dto
		return this.prisma.letter.update({
			where: { id },
			data: { title, body, file }
		})
	}

	async getAll() {
		return this.prisma.letter.findMany()
	}
}
