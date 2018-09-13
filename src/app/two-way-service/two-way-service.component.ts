import { Component, OnInit } from '@angular/core';
import {ActionService} from '../action.service';

@Component({
  selector: 'app-two-way-service',
  templateUrl: './two-way-service.component.html',
  styleUrls: ['./two-way-service.component.css']
})
export class TwoWayServiceComponent implements OnInit {

  result: string;
  firstNumber: number;
  secondNumber: number;
  action: string;
  
  constructor(private actionService:ActionService) { }

  ngOnInit() {
  }
  mathAction(): void {
    if (this.firstNumber && this.secondNumber && this.action) {
     this.result=this.actionService.mathAction(this.firstNumber , this.secondNumber , this.action);
    }
  }
}
