import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'spa-atm';
  view = 'pin';

  onPinSuccess() {
    this.view = 'operations';
  }

  onBalanceScreen() {
    this.view = 'balance';
  }

  onWithdrawalScreen() {
    this.view = 'withdrawal';
  }
  onExit() {
    this.view = 'pin';
  }

  onBackToBalance() {
    this.view = 'operations';
    console.log(this.view)
  }
}
