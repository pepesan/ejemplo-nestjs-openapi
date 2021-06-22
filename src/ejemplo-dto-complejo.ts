import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";
import { EjemploDtoNodo } from './ejemplo-dto-nodo';
import { UserRole } from './enum.userrole';
import { EjemploModeloExtra } from './ejemplo-modelo-extra';

@ApiExtraModels(EjemploModeloExtra)
export class EjemploDtoComplejo {
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
  @ApiProperty({
    description: 'array de números de tlf',
    isArray: true,
    type: [String],
    required: false,
    default: [],
  })
  tlfs: string[];
  // Relación entre Entidades con otra entidad
  @ApiProperty({
    type: () => EjemploDtoNodo,
    required: false,
  })
  nodo: EjemploDtoNodo;
  // uso de enumerados
  @ApiProperty({
    enum: ['Admin', 'Moderator', 'User'],
    required: false,
  })
  role: UserRole;
  // Tipo RAW
  @ApiProperty({
    type: 'array',
    description: 'Array bidimensional de números',
    required: false,
    items: {
      type: 'array',
      items: {
        type: 'number',
      },
    },
  })
  coords: number[][];
}
