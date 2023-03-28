import { Controller, Get, HttpStatus } from '@nestjs/common';
import { Body, HttpCode, Param, Post, Res } from '@nestjs/common/decorators';
import { response } from 'express';

@Controller('courses')
export class CoursesController {
    @Get()
    findAll(@Res() response) {
        return response.status(200).send('Listagen de Cursos');
    }
    @Get(':id')
    findOne(@Param() params ) {
        return `Curso #${params.id}`;
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body('name') body) {
        return body;

    }
    
}
