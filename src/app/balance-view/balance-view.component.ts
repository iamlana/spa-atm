import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';
@Component({
  selector: 'app-balance-view',
  templateUrl: './balance-view.component.html',
  styleUrls: ['./balance-view.component.sass'],
})
export class BalanceViewComponent implements OnInit {
  @Output()
  goBack = new EventEmitter<void>();

  balance: number = 0

  constructor(
    private inMemoryDataService: InMemoryDataService
  ) {}

  ngOnInit(): void {
    this.balance = this.inMemoryDataService.getBalance()
  }

  onGoBack() {
    this.goBack.emit();
  }
}
