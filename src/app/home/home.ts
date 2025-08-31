import { Component, inject, OnInit } from '@angular/core';
import { Banner } from './banner/banner';
import { Popular } from './popular/popular';
import { Services } from "./services/services";
import { ContactUs } from "./contact-us/contact-us";
import { Testimony } from "./testimony/testimony";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Banner, Popular, Services, ContactUs, Testimony],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{

      activeRoute: ActivatedRoute = inject(ActivatedRoute);

    ngOnInit(){
        this.activeRoute.fragment.subscribe((data) => {
            //console.log(data);
            this.JumpToSection(data)
        });
    }

    JumpToSection(section){
        document.getElementById(section)?.scrollIntoView({behavior:'smooth'})
    }
}
