import { Component, inject } from '@angular/core';
import { NavigationCancel, NavigationError, RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Courses } from "./courses/courses";
import { Home } from "./home/home";
import { Contact } from "./contact/contact";
import { About } from "./about/about";
import { CourseService } from './Services/course';
import { Router,  RouterEvent, NavigationEnd, NavigationStart, Event } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers : [CourseService]
})
export class App {
  protected title = 'Routings';

  showLoader:boolean = false

    //  constructor(private route:Router){
    //     route.events.subscribe((event) => {
    //        console.log(event);

    //     })
    //  }
     router:Router = inject(Router)

     ngOnInit(){
        this.router.events.subscribe((routerEvent:Event) => {
              if(routerEvent instanceof NavigationStart){
                   this.showLoader = true
              }

              if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
                   this.showLoader = false
              }
        })
     }





}
