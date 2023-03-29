import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'Fundamentos do framework NestJs',
            description: 'Fundamentos do framework NestJs',
            tags: ['nodeJs', 'nestJs', 'javaScript'],
        }
    ]

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        return this.courses.find((course : Course) => course.id === Number(id));
    }

    create(createCourseDto: any) {
        this.courses.push(createCourseDto);
    }

    update(id: string, updateCourseDto: any) {
        const indexCourse = this.courses.findIndex(
            (course: Course) => course.id === Number(id),
        );

        this.courses[indexCourse] = updateCourseDto;
    }

    remove(id: string, updateCourseDto: any) {
        const indexCourse = this.courses.findIndex(
            (course: Course) => course.id === Number(id),
        );

        if(indexCourse >= 0) {
            this.courses.splice(indexCourse, deleteCount:1);
        }
    }
}
