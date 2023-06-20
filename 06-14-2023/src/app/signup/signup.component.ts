import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  a: String = "";
  display: String = "";
  

  first = {
    FirstName: '',
    LastName: '',
    date: '',
    number: '',
    email: '',
    Password: ''

  };
  onSignup() {
  
    this.display = ""
    
    for (const [key, value] of Object.entries(this.first)) {
      this.display += key + ": " + value + "<br>" 
    }
  }
}
