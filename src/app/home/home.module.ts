import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../Shared/material.module';
import { HomeRoutingModule } from './home.route';
import { BollywoodModule } from './bollywood/bollywood.module';
import { HollywoodModule } from './hollywood/hollywood.module';
import { SportsModule } from './sports/sports.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    BollywoodModule,
    HollywoodModule,
    SportsModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
