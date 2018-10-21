const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const stripe = require("stripe")(functions.config().stripe.testkey);
exports.stripeCharges = functions.firestore
    .document("/payments/users/TAMO/{paymentId}")
    .onWrite((event, context) => {
    const payment = event.after.data();
    const paymentId = context.params.paymentId;
    // checks if payment exists or if it has already been charged
    if (!payment || payment.charge)
        return null;
    return admin
        .firestore()
        .doc(`/payments/users/TAMO/${paymentId}`)
        .get()
        .then(snapshot => {
        return snapshot.data();
    })
        .then(customer => {
        const amount = payment.amount * 100; // amount must be in cents
        const idempotency_key = paymentId; // prevent duplicate charges
        const source = payment.token.id;
        const currency = "usd";
        const description = "Test Charge";
        const charges = {
            amount,
            currency,
            description,
            source
        };
        return stripe.charges.create(charges, { idempotency_key });
    })
        .then(charges => {
        // update charge field with payment details if stripe charged successfully
        return admin
            .firestore()
            .doc(`/payments/users/TAMO/${paymentId}`)
            .set({
            charge: charges
        }, {
            merge: true
        });
    });
});
//# sourceMappingURL=index.js.map