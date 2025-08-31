import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CourseService } from '../Services/course';
import { Course } from '../Models/course';
import { CourseDetail } from './course-detail/course-detail';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, RouterLink],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {

   coursesService = inject(CourseService);
  //  AllCourses: Course[] = this.coursesService.courses;


  AllCourses: Course[];
  searchString: string;

  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    // this.searchString = this.activeRoute.snapshot.queryParams['search'];
    // this.searchString = this.activeRoute.snapshot.queryParamMap.get('search');
    // console.log(this.searchString);

    this.activeRoute.queryParamMap.subscribe((data) => {
      this.searchString = data.get('search');

      if(this.searchString === undefined || this.searchString === '' || this.searchString === null){
        // this.coursesService.getAllcourses().subscribe((data: Course[]) => {
        //   this.AllCourses = data;
        // });

        this.AllCourses = this.activeRoute.snapshot.data['courses'];
      }else{
        this.AllCourses = this.coursesService.courses
          .filter(x => x.title.toLowerCase()
          .includes(this.searchString.toLowerCase()));
      }
    })


  }
}
