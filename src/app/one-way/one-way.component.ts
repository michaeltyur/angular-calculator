import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.css']
})
export class OneWayComponent implements OnInit {

  result: number;
  constructor() { }

  ngOnInit() {
  }

  sum(a: number, b: number): void {

    if (a && b) 
    {
      this.result = a + b;
    }

  }
  subtraction(a: number, b: number): void {
    if (a && b) 
    {
      this.result = a - b;
    }

  }
  multiplication(a: number, b: number): void {
    if (a && b) 
    {
      this.result = a * b;
    }

  }
  division(a: number, b: number): void {

    if (a && b && b != 0) 
    {
      this.result = a / b;
    }
  }
}
