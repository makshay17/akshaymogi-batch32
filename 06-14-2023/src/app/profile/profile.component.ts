import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  FirstName: string="";
  LastName:string="";

  Profile=true;
  output=false;
  ngOnInit() {
  }

  onProfile () {
    this.Profile=false;
    this.output=true;
    
  }

 
}
