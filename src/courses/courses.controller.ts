import { Controller, Get, HttpStatus } from '@nestjs/common';
import { Body, Delete, HttpCode, Param, Patch, Post, Res } from '@nestjs/common/decorators';
import { response } from 'express';
import { CourseService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly courseService: CourseService) {

    }


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

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Exclusão do Curso #${id}`;
    }
}
