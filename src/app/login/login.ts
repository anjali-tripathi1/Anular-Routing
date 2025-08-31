import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
      @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.activeRoute.queryParamMap.subscribe((queries) => {
      const logout = Boolean(queries.get('logout'));
      if(logout){
        this.authService.logout();
        alert('You are now logged out. IsLogged = ' + this.authService.isLogged);
      }
    })
  }

  OnLoginClicked(){
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authService.login(username, password);

    if(user === undefined){
      alert('The login credentials you have entered is not correct.')
    }
    else{
      alert('Welcome ' + user.name + '. You are logged in.');
      this.router.navigate(['\Courses']);
    }
  }
}
