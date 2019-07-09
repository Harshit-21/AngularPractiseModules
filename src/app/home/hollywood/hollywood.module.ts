import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HollywoodListComponent } from './hollywood-list/hollywood-list.component';
import { HollywoodAddComponent } from './hollywood-add/hollywood-add.component';
import { HollywoodViewComponent } from './hollywood-view/hollywood-view.component';
import { HollywoodService } from './hollywood.service';
import { HollywoodComponent } from './hollywood.component';
import { HollywoodRoutingModule } from './hollywood.route';

@NgModule({
  declarations: [HollywoodListComponent, HollywoodAddComponent, HollywoodViewComponent,HollywoodComponent],
  imports: [
    CommonModule,
    HollywoodRoutingModule
  ],
  providers:[HollywoodService],
  exports:[]

})
export class HollywoodModule { }
