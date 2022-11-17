import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PinViewComponent } from './pin-view/pin-view.component';
import { SelectOperationViewComponent } from './select-operation-view/select-operation-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PinViewComponent,
    SelectOperationViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
