import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bollywood-list',
  templateUrl: './bollywood-list.component.html',
  styleUrls: ['./bollywood-list.component.css']
})
export class BollywoodListComponent implements OnInit {

  public clicked:any=[];

  public selectedschemas = [
    {
      name: 'Schema 1',
      
      tables1: ['table1', 'table2', 'table3', 'table4', 'table5', 'table6'],
      tables2: ['table7', 'table8', 'table9', 'table10', 'table11', 'table12']
    },
    {
      name: 'Schema 2',
      tables1: ['table1', 'table2', 'table3', 'table4', 'table5', 'table6'],
      tables2: ['table7', 'table8', 'table9', 'table10', 'table11', 'table12']
    },

    {
      name: 'Schema 3',
      tables1: ['table1', 'table2',  'table4', 'table5', 'table6'],
      tables2: ['table7', 'table8', 'table9', 'table10', 'table11', 'table12']
    },

    {
      name: 'Schema 4',
      tables1: ['table1', 'table2', 'table3', 'table4', 'table5', 'table6'],
      tables2: ['table7', 'table8', 'table9', 'table10', 'table11', 'table12']
    },

    {
      name: 'Schema 5',
      tables1: ['table1', 'table2', 'table3', 'table4', 'table5', 'table6'],
      tables2: ['table7', 'table8', 'table9', 'table10', 'table11', 'table12']
    }

   
  ]

  constructor() { }

  ngOnInit() {

  }

}
