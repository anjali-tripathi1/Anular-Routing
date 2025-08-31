import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  imports: [FormsModule, CommonModule],
  templateUrl: './popular.html',
  styleUrl: './popular.css'
})
export class Popular implements OnInit{
    courseService = inject(CourseService)
  popularCourses: Course[] = [];
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }

  navigateToCourses(){
    //this.router.navigate(['Courses'], {relativeTo: this.activeRoute});
    this.router.navigateByUrl('Courses');
  }
}
