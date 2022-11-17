import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-balance-view',
  templateUrl: './balance-view.component.html',
  styleUrls: ['./balance-view.component.sass'],
})
export class BalanceViewComponent implements OnInit {
  @Output()
  balance = new EventEmitter<void>();

  @Output()
  goBack = new EventEmitter<void>();


  constructor() {}

  ngOnInit(): void {}

  onBalanceView() {
    this.balance.emit();
  }

  onGoBack(){
    this.goBack.emit()
  }
}
