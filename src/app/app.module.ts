import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PinViewComponent } from './pin-view/pin-view.component';
import { SelectOperationViewComponent } from './select-operation-view/select-operation-view.component';
import { BalanceViewComponent } from './balance-view/balance-view.component';
import { WithdrawalViewComponent } from './withdrawal-view/withdrawal-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PinViewComponent,
    SelectOperationViewComponent,
    BalanceViewComponent,
    WithdrawalViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
