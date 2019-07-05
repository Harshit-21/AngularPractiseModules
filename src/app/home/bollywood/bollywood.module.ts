import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BollywoodListComponent } from './bollywood-list/bollywood-list.component';
import { BollywoodAddComponent } from './bollywood-add/bollywood-add.component';
import { BollywoodViewComponent } from './bollywood-view/bollywood-view.component';

@NgModule({
  declarations: [BollywoodListComponent, BollywoodAddComponent, BollywoodViewComponent],
  imports: [
    CommonModule
  ]
})
export class BollywoodModule { }
