import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { Router} from '@angular/router';
import { Course } from '../Models/course';
@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
      activeRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  course;

  ngOnInit(){
    // this.activeRoute.data.subscribe((data) => {
    //   this.course = data;
    // })

    // this.course = this.router.getCurrentNavigation().extras.state;
    this.course = history.state;
  }
}
