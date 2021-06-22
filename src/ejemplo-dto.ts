import { ApiProperty } from '@nestjs/swagger';

export class EjemploDto {
  @ApiProperty({
    description: 'Nombre de la persona',
    required: true,
    type: String,
    default: 'John',
  })
  name: string;
  @ApiProperty({
    description: 'Edad de la persona',
    required: false,
    type: Number,
    default: 0,
  })
  age: number;
}
