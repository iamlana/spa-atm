import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'spa-atm';
  view = 'pin'

  onPinSuccess() {
    this.view = 'operations'
    console.log('Success from app')
  }
}
