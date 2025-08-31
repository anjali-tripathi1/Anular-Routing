import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IDeactivate } from '../Services/authguard.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements IDeactivate{
   firstName:string = ''
   lastName:string = ''
   country:string = 'usa'
   message:string = ''

   isSubmitted:boolean = false

   onSubmit(){
      this.isSubmitted = true
   }

   canExit(){
      if((this.firstName || this.lastName || this.message) && !this.isSubmitted){
          return confirm('you have unsaved changes, Do you want to navigate away.')
      } else {
         return true
      }
   }
}
