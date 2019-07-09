import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './Shared/shared.service';
import { HttpService } from './Shared/http.service';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './Shared/material.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule
  ],
  providers: [SharedService,HttpService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
