import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  imports: [],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail implements OnInit{
    selectedCourse: Course
    courseId: number

    courseService:CourseService = inject(CourseService)
    activatedRoute:ActivatedRoute = inject(ActivatedRoute)

    ngOnInit(){
      //  this.courseId = this.activatedRoute.snapshot.params['id']
       this.courseId = +this.activatedRoute.snapshot.paramMap.get('id')
        this.selectedCourse =  this.courseService.courses.find( course => course.id === this.courseId)

    }
}
