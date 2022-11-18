import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'app-withdrawal-view',
  templateUrl: './withdrawal-view.component.html',
  styleUrls: ['./withdrawal-view.component.sass'],
})
export class WithdrawalViewComponent implements OnInit {
  @Output()
  goBack = new EventEmitter<void>();

  amount = '';
  constructor(private inMemoryDataService: InMemoryDataService) {}

  ngOnInit(): void {}

  onGoBack() {
    this.goBack.emit();
  }
  isNumber(charCode: number): boolean {
    return charCode >= 48 && charCode < 58;
  }
  onSubmit() {
    const value = parseInt(this.amount);
    this.inMemoryDataService.withdraw(value);
    this.amount = '';
  }
}
