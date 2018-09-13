import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.css']
})
export class OneWayComponent implements OnInit {

  result: string;
  constructor() {
    this.result="";
   }

  ngOnInit() {
  }

  sum(a: number, b: number): void {

    if (a && b) 
    {
      this.result = (Number(a) +  Number(b)).toString();
    }

  }
  subtraction(a: number, b: number): void {
    if (a && b) 
    {
      this.result = (a - b).toString();
    }

  }
  multiplication(a: number, b: number): void {
    if (a && b) 
    {
      this.result = (a * b).toString();
    }

  }
  division(a: number, b: number): void {

    if (a && b) 
    {
      if( b != 0){
        this.result = (a / b).toString();
      }
      else this.result="division by zero is undefined";
    }
  }
}
