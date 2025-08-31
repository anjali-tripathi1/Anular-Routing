import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimony',
  imports: [CommonModule],
  templateUrl: './testimony.html',
  styleUrl: './testimony.css'
})
export class Testimony {
    testimonials: string[] = ['Avery Holmes', 'Craig Ramirez', 'Landon Stephens', 'Leah Ward']
}
