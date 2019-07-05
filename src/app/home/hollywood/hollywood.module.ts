import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HollywoodListComponent } from './hollywood-list/hollywood-list.component';
import { HollywoodAddComponent } from './hollywood-add/hollywood-add.component';
import { HollywoodViewComponent } from './hollywood-view/hollywood-view.component';

@NgModule({
  declarations: [HollywoodListComponent, HollywoodAddComponent, HollywoodViewComponent],
  imports: [
    CommonModule
  ]
})
export class HollywoodModule { }
