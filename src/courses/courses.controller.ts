import { Controller, Get } from '@nestjs/common';
import { Body, Param, Post } from '@nestjs/common/decorators';

@Controller('courses')
export class CoursesController {
    @Get()
    findAll() {
        return 'Listagen de Cursos';
    }
    @Get(':id')
    findOne(@Param() params ) {
        return `Curso #${params.id}`;
    }

    @Post()
    create(@Body('name') body) {
        return body;

    }
    
}
