import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
