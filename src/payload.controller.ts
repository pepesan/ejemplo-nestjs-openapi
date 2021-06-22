import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { EjemploDto } from './ejemplo-dto';
import { EjemploDtoComplejo } from './ejemplo-dto-complejo';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UserRole } from './enum.userrole';

@ApiTags('payload')
@Controller('payload')
export class PayloadController {
  @Post()
  async create(@Body() createDto: EjemploDto) {
    return `This action adds a new object with name: ${createDto.name}`;
  }
  @Post('complejo')
  @ApiBody({ type: [EjemploDtoComplejo] })
  async createComplejo(@Body() createDto: EjemploDtoComplejo) {
    return `This action adds a new object with name: ${createDto.name}`;
  }
  @Post('complejos')
  async postComplejos(@Body() createDtos: EjemploDtoComplejo[]) {
    return `This action adds a new object with name: ${createDtos[0].name}`;
  }
  @Get('miquery')
  @ApiQuery({ name: 'role', enum: UserRole })
  async filterByRole(@Query('role') role: UserRole = UserRole.User) {
    return role;
  }
}
