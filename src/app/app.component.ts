import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  method(): string {
    return "method";
  }
  text: string = "text";

  tryInterpolation: string = "Let's try interpolation!";

  num: number = 5;

  increaseNum(): number {
    this.num = this.num + 1;
    return this.num ;
  }

  decreaseNum(): number {
    this.num = this.num - 1;
    return this.num ;
  }

  name: string = "Michaela";

  result: string = "You are not ready yet!";
  getInfo(info: string): void {
    this.result = info;
  }
}
