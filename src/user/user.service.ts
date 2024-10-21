import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from '../prisma.service'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	create(createUserDto: CreateUserDto) {
		const { name, username, password } = createUserDto
		return this.prisma.user.create({
			data: { name, username, password }
		})
	}

	findAll() {
		return this.prisma.user.findMany()
	}

	findOne(id: string) {
		return this.prisma.user.findUnique({
			where: { id }
		})
	}

	update(id: string, updateUserDto: UpdateUserDto) {
		return this.prisma.user.update({
			where: { id },
			data: updateUserDto,
			select: { id: true, name: true, username: true }
		})
	}

	remove(id: string) {
		return `This action removes a #${id} user`
	}
}
