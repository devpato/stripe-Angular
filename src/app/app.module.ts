import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PaymentService } from "./payments/payment.service";
import { MakePaymentComponent } from "./payments/make-payment/make-payment.component";

@NgModule({
  declarations: [AppComponent, MakePaymentComponent],
  imports: [BrowserModule],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
