import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { TypesService } from './types.service';

@Controller('types')
export class TypesController {

  constructor(private TypesService: TypesService) {}
  
  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json(this.TypesService.findAll())
  }

  @Get(':id')
  findName(@Param('id') id: number ,@Res() res: Response) {
    res.status(HttpStatus.OK).json(this.TypesService.findOne(id))
  }
}
