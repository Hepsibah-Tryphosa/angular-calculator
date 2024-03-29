import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-project';


  calValue: number = 0;
  funcT: any = 'NoFunction';
  calNumber: string = 'noValue';
  firstNumber: number = 0;
  secondNumber: number = 0;

  
  onClickValue(val: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(val);

    }
    else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }
  onNumberClick(val: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;

    }
    else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }
  onFunctionClick(val: string) {
    if (val == 'c') {
      this.clearClick();
    }
    else if (this.funcT == 'NoFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.funcT = val;
      this.calNumber = 'noValue';
    }
    else if (this.funcT != 'NoFunction') {
      this.secondNumber = this.calValue;
      this.valCalculate(val);
    }
  }
  valCalculate(val: string) {
    console.log(this.funcT);
    if (this.funcT == '+') {
      const Total = this.firstNumber + this.secondNumber
      this.totalAssignVal(Total, val);

    }
    if (this.funcT == '-') {
      const Total = this.firstNumber + this.secondNumber
      this.totalAssignVal(Total, val);

    }
    if (this.funcT == '*') {
      const Total = this.firstNumber + this.secondNumber
      this.totalAssignVal(Total, val);

    }
    if (this.funcT == '%') {
      const Total = this.firstNumber + this.secondNumber
      this.totalAssignVal(Total, val);

    }
    if (this.funcT == '/') {
      const Total = this.firstNumber + this.secondNumber
      this.totalAssignVal(Total, val);

    }


  }
  totalAssignVal(Total: number, val: string) {
    this.calValue = Total;
    this.firstNumber = Total;
    this.secondNumber = 0;
    this.funcT = 'val';
    this.calNumber = 'noValue';
    if (val == '=') {
      this.equalClick();
    }
  }
  equalClick() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }
  clearClick() {
    this.calValue = 0;
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }
}