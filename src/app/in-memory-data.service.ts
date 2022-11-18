import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  private balance = 12345

  getBalance() {
    return this.balance
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      throw new Error('Cannot withdraw')
    }
    this.balance -= amount
  }
}
