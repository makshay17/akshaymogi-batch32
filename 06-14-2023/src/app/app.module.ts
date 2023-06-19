 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './logic/my-logic.component';
import { HeaderComponent } from './header/header.component';
import { loginComponent } from './login/login.component';


@NgModule({
  declarations: [				
    AppComponent,
      MyComponentComponent,
      HeaderComponent,
      loginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
