import { ApiProperty } from '@nestjs/swagger';

export class EjemploModeloExtra {
  @ApiProperty({
    description: 'Nombre del modelo',
    required: true,
    type: String,
    default: 'John',
  })
  name: string;
}
