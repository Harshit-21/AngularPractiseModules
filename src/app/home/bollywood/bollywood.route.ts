import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BollywoodComponent } from './bollywood.component';
import { BollywoodAddComponent } from './bollywood-add/bollywood-add.component';
import { BollywoodListComponent } from './bollywood-list/bollywood-list.component';
import { BollywoodViewComponent } from './bollywood-view/bollywood-view.component';

const routes: Routes = [
    { path: '', redirectTo: 'bollywood/list', pathMatch: 'full' },

    {
        path: 'bollywood',
        component: BollywoodComponent,
        children: [
        //     {
        //         path:'',redirectTo:'/list',pathMatch:'full'
        //     }
        //   ,
            { path: 'list', component: BollywoodListComponent },
            { path: 'add', component: BollywoodAddComponent },
            { path: 'view', component: BollywoodViewComponent }


        ]
    },




];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BollywoodRoutingModule { }
