import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BollywoodListComponent } from './bollywood-list/bollywood-list.component';
import { BollywoodAddComponent } from './bollywood-add/bollywood-add.component';
import { BollywoodViewComponent } from './bollywood-view/bollywood-view.component';
import { BollywoodService } from './bollywood.service';
import { BollywoodComponent } from './bollywood.component';
import { BollywoodRoutingModule } from './bollywood.route';
import { MaterialModule } from 'src/app/Shared/material.module';

@NgModule({
  declarations: [BollywoodListComponent, BollywoodAddComponent, BollywoodViewComponent,BollywoodComponent],
  imports: [
    CommonModule,
    BollywoodRoutingModule,
    MaterialModule
    
  ],
  providers:[BollywoodService],
  exports:[]
})
export class BollywoodModule { }
