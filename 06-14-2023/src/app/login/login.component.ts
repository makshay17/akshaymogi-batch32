import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
  
  a: String = "";
  display: String = "";
  display1: String = "";

  
  second = {
    UserName: '',
    Password: ''
  };

  constructor() { }


  ngOnInit() {
  }

 
  onLogin() {
  this.display1 = ""
    for (const [key, value] of Object.entries(this.second)) {
      this.display1 += key + ": " + value + "<br>"
    }
    
  }

  
}
