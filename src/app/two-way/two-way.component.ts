import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  result: string;
  firstNumber: number;
  secondNumber: number;
  action: string;

  constructor() { }

  ngOnInit() {
    this.result = "";
  }

  mathAction(): void {
    if (this.firstNumber && this.secondNumber && this.action) {
      switch (this.action) {
        case '+':
          this.result = (this.firstNumber + this.secondNumber).toString();
          break;
        case '-':
          this.result = (this.firstNumber - this.secondNumber).toString();
          break;
        case 'X':
          this.result = (this.firstNumber * this.secondNumber).toString();
          break;
        case '/':
          {
            if (this.secondNumber != 0)
              this.result = (this.firstNumber / this.secondNumber).toString();
            else this.result = "division by zero is undefined";
          }
          break;
        default:
          break;
      }
    }
  }
}
