import { Controller, Get, HttpStatus } from '@nestjs/common';
import { Body, Delete, HttpCode, Param, Patch, Post, Res } from '@nestjs/common/decorators';
import { response } from 'express';
import { CourseService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly courseService: CourseService) {}

    @Get()
    findAll(@Res() response) {
        return this.courseService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id :string ) {
        return this.courseService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        return this.courseService.create(body);

    }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return this.courseService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.courseService.remove(id);
    }
}
