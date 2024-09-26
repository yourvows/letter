import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateLetterDto {
	@IsString()
	@IsNotEmpty()
	title: string

	@IsString()
	@IsNotEmpty()
	body: string

	@IsNumber()
	@IsNotEmpty({ message: 'Recipient id is required' })
	recipientId: string

	file?: string
}
