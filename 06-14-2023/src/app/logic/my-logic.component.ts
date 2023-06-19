import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-logic',
  templateUrl: './my-logic.component.html',
  styleUrls: ['./my-logic.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor() { }
  var1: String="login";
  FirstName :String=' ';
  LastName :String=" ";
  newProfile3 :String="";
  abc=1;

 clickme(){
this.FirstName=" ";
this.LastName=" ";
this.newProfile3=" ";
 if(this.abc==1){
  this.var1="logout";
  this.abc=0;
 }
 else{
  this.var1="login";
  this.abc=1;
 }

 }
  ngOnInit(): void {
  }

}
