import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsListComponent } from './sports-list/sports-list.component';
import { SportsAddComponent } from './sports-add/sports-add.component';
import { SportsViewComponent } from './sports-view/sports-view.component';

@NgModule({
  declarations: [SportsListComponent, SportsAddComponent, SportsViewComponent],
  imports: [
    CommonModule
  ]
})
export class SportsModule { }
