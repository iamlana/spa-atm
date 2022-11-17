import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-operation-view',
  templateUrl: './select-operation-view.component.html',
  styleUrls: ['./select-operation-view.component.sass'],
})
export class SelectOperationViewComponent implements OnInit {
  @Output()
  balance = new EventEmitter<void>();
  @Output()
  withdrawal = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  showBalanceScreen() {
    this.balance.emit()
  }
  showWithdrawalScreen() {
    this.withdrawal.emit();
  }
}
