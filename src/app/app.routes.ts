import { Routes, RouterModule,   } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Courses } from './courses/courses';
import { CourseDetail } from './courses/course-detail/course-detail';
import { PageNotFound } from './page-not-found/page-not-found';
import { Login } from './login/login';
import { Checkout } from './checkout/checkout';
import { AuthGuardService } from './Services/authguard.service';
import { CanActivate, CanActivateChild, resolve } from './Services/authguard';
import { NgModule } from '@angular/core';


export const routes: Routes = [
   {path: '', component : Home},
   {path: 'Home', component : Home},
   {path : 'About', component : About},
   {path: 'Contact', component : Contact, canDeactivate:[(comp: Contact) => {return comp.canExit()}]},
   {path : 'Courses', component : Courses, resolve:{courses: resolve}},
   {path : 'Courses', canActivateChild:[CanActivateChild], children: [
      {path: 'Course/:id', component: CourseDetail},
      {path: 'Checkout', component:Checkout,}
   ] },
   {path: 'Login', component: Login},
   {path: 'PageNotFound', component: PageNotFound}

];






