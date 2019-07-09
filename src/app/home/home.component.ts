import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router,private activateroute:ActivatedRoute) { 
    // console.log(this.activateroute.snapshot.url[0].path);
    
  }

  ngOnInit() {
  }


  openroute(value:any){
    console.log(this.activateroute);
    this.route.navigate([value])
  }

}
