import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './hollywood.component.html',
  styleUrls: ['./hollywood.component.css']
})
export class HollywoodComponent implements OnInit {

  constructor(private route:Router,private activateroute:ActivatedRoute) { 
    
  }

  ngOnInit() {
  }


 

}
