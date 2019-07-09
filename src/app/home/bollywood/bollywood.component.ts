import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './bollywood.component.html',
  styleUrls: ['./bollywood.component.css']
})
export class BollywoodComponent implements OnInit {

  constructor(private router:Router,private activateroute:ActivatedRoute) { 
    console.log(this.activateroute);
    
    
  }

  ngOnInit() {
    // this.router.navigate([ 'list' ], { relativeTo: this.activateroute });
  }


  openroute(){
    // this.router.navigate([ 'add' ], { relativeTo: this.activateroute });
    this.router.navigate([ 'ffff/add' ]);

  }


 

}
