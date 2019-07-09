import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BollywoodListComponent } from './bollywood/bollywood-list/bollywood-list.component';
import { SportsListComponent } from './sports/sports-list/sports-list.component';
import { HollywoodListComponent } from './hollywood/hollywood-list/hollywood-list.component';
import { HomeComponent } from './home.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
    // {
    //     path:'',redirectTo:'bollywood',pathMatch:'full'
    // },
    {
        path: 'bollywood', component: BollywoodComponent
    },
    {
        path: 'hollywood', component: HollywoodComponent
    }
    , {
        path: 'sports', component: SportsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
