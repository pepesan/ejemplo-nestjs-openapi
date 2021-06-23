import { ApiProperty, OmitType, PartialType, PickType } from "@nestjs/swagger";

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

export class UpdateEjemploDto extends PartialType(EjemploDto) {}

export class UpdateAgeEjemploDto extends PickType(EjemploDto, [
  'age',
] as const) {}

export class UpdateNoNameCatDto extends OmitType(EjemploDto, [
  'name',
] as const) {}
