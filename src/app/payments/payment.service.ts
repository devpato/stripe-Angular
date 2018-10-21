import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class PaymentService {
  userId: string;

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) {
    db.firestore.settings({ timestampsInSnapshots: true });
    // this.afAuth.authState.subscribe(auth => {
    //   if (auth) this.userId = auth.uid;
    // });
  }

  processPayment(token: any, amount: number) {
    const payment = { token, amount };
    return this.db
      .collection("payments")
      .doc("users")
      .collection("TAMO")
      .add(payment);
  }
}
