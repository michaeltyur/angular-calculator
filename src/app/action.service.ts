import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor() { }

  mathAction(firstNumber:number,secondNumber:number,action:string): string {
    if (firstNumber && secondNumber && action) {
      switch (action) {
        case '+':
          return (firstNumber + secondNumber).toString();
        case '-':
          return (firstNumber - secondNumber).toString();
        case 'x':
          return (firstNumber * secondNumber).toString();
        case '/':
          {
            if (secondNumber != 0)
              return (firstNumber / secondNumber).toString();
            else return "division by zero is undefined";
          }
        default:
        return "en error ocured ;)";
      }
    }
  }
}
