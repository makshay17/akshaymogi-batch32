import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
  //signupuser: any[] = [];
  a: String = "";
  display: String = "";
  display1: String = "";

  first = {
    FirstName: '',
    LastName: '',
    date: '',
    number: '',
    email: '',
    Password: ''

  };
  second = {
    UserName: '',
    Password: ''
  };

  constructor() { }


  ngOnInit() {
  }
  one() {

  }
  onSignup() {
  
    this.display = ""
    // this.signupuser.push(this.first)
    for (const [key, value] of Object.entries(this.first)) {
      this.display += key + ": " + value + "<br>" 
    }
  }
  onLogin() {


    this.display1 = ""
    for (const [key, value] of Object.entries(this.second)) {
      this.display1 += key + ": " + value + "<br>"
    }
    
  }

  
}
