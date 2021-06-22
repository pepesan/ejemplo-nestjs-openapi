import { ApiProperty } from '@nestjs/swagger';

export class EjemploDtoNodo {
  @ApiProperty({
    description: 'Nombre del nodo',
    required: true,
    type: String,
    default: 'Nodo1',
  })
  name: string;
}
