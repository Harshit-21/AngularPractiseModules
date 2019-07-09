import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HollywoodAddComponent } from './hollywood-add/hollywood-add.component';
import { HollywoodListComponent } from './hollywood-list/hollywood-list.component';
import { HollywoodViewComponent } from './hollywood-view/hollywood-view.component';
import { HollywoodComponent } from './hollywood.component';

const routes: Routes = [
    {
        path: 'hjdjd',
        component: HollywoodComponent,
        children: [

            { path: 'add', component: HollywoodAddComponent },
            { path: 'list', component: HollywoodListComponent },
            { path: 'view', component: HollywoodViewComponent }


        ]
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HollywoodRoutingModule { }
