import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.html',
  styleUrls: ['./banner.css'],
  imports:[FormsModule, RouterLink]
})
export class Banner {

    router: Router = inject(Router);

  OnSearchClicked(value: string){
    //console.log(value);
    this.router.navigate(['/Courses'], { queryParams: {search: value}});
  }
}
