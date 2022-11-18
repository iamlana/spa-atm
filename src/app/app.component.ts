import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
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

  onBackToOperations() {
    this.view = 'operations';
  }
}
