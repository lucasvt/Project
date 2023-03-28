import { Controller, Get, HttpStatus } from '@nestjs/common';
import { Body, HttpCode, Param, Patch, Post, Res } from '@nestjs/common/decorators';
import { response } from 'express';

@Controller('courses')
export class CoursesController {
    @Get()
    findAll(@Res() response) {
        return response.status(200).send('Listagen de Cursos');
    }
    @Get(':id')
    findOne(@Param('id') id :string ) {
        return `Curso #${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body) {
        return body;

    }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return `Atualização do Curso #${id}`;
    }

}
