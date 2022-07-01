import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
//we have to import explicitly matbutton module
import {MatButtonModule} from '@angular/material/button';
import { ContactModule } from './contact/contact.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    ContactModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
