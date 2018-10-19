import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from "../environments/environment";
import { AngularFireAuth } from "angularfire2/auth";

import { AppComponent } from "./app.component";
import { PaymentService } from "./payments/payment.service";
import { MakePaymentComponent } from "./payments/make-payment/make-payment.component";

@NgModule({
  declarations: [AppComponent, MakePaymentComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [PaymentService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule {}
