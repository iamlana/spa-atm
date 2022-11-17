import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-withdrawal-view',
  templateUrl: './withdrawal-view.component.html',
  styleUrls: ['./withdrawal-view.component.sass'],
})
export class WithdrawalViewComponent implements OnInit {
  @Output()
  goBack = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onGoBack() {
    this.goBack.emit();
  }
}
