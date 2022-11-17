import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-withdrawal-view',
  templateUrl: './withdrawal-view.component.html',
  styleUrls: ['./withdrawal-view.component.sass'],
})
export class WithdrawalViewComponent implements OnInit {
  @Output()
  withdrawal = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
  onWithdrawalView() {
    this.withdrawal.emit();
  }
}
