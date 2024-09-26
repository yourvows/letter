import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateLetterDto {
	@IsNotEmpty()
	@IsString()
	id: string

	@IsNotEmpty()
	@IsString()
	title: string

	@IsNotEmpty()
	@IsString()
	body: string

	@IsNotEmpty()
	@IsString()
	file?: string
}
