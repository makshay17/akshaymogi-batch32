import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-bio',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 
  showText: any;
  isLogin = false;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.showText = !this.showText;
    
  }
}
