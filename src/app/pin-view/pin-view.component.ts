import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pin-view',
  templateUrl: './pin-view.component.html',
  styleUrls: ['./pin-view.component.sass'],
})
export class PinViewComponent implements OnInit {
  @Output()
  success = new EventEmitter<void>();

  attempts = 0;
  error = false;
  block = false;

  constructor() {}

  inputMsg = 'Must contain only numbers and consist of 4 characters';
  pin: string = '';

  isNumber(charCode: number): boolean {
    return charCode >= 48 && charCode < 58;
  }

  onSubmit() {
    if (this.pin === '2022') {
      this.success.emit();
      this.attempts = 0;
      this.block = false;
      this.error = false;
    } else {
      console.log('Error from app');
      this.pin = '';
      this.attempts++;
      this.block = this.attempts >= 3;
      this.error = true;
    }
  }

  ngOnInit(): void {}
}
