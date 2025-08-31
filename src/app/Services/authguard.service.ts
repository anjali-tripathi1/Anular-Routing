import { inject, Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, GuardResult, MaybeAsync, RedirectCommand, Resolve, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Contact } from "../contact/contact";
import { Course } from "../Models/course";
import { CourseService } from "./course";

export interface IDeactivate{
    canExit: () => boolean | Observable<boolean> | Promise<boolean>
}

@Injectable({
   providedIn : 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanDeactivate<IDeactivate>, Resolve<Course[]>{

     authService:AuthService = inject(AuthService)
     router:Router = inject(Router)
     courseService:CourseService = inject(CourseService)

      canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):
      boolean | Observable<boolean> | Promise<boolean>
      {
         if(this.authService.IsAuthenticated()){
             return true
         } else {
            this.router.navigate(['/Login'])
            return false
         }
      }

      canActivateChild(childRoute:ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean | UrlTree | Observable<boolean> | UrlTree | Promise<boolean>
      {
          return this.canActivate(childRoute, state)
      }

      canDeactivate(component:IDeactivate, currentRoute:ActivatedRouteSnapshot, currentState:RouterStateSnapshot, nextState:RouterStateSnapshot)
      {
          return component.canExit()
      }

     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course[] | Observable<Course[]> | Promise<Course[]> {
        //  let courseList:Course[] = []
        //  this.courseService.getAllcourses().subscribe((courses:Course[]) => {
        //      courseList = courses
        //  })

        //  return courseList
        return this.courseService.getAllcourses()
     }
}
