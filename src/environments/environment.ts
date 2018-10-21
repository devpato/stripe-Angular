// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAcd3hAl5OqI8fPs6RCbJa0HP7rahbsidA",
    authDomain: "stripe-5f338.firebaseapp.com",
    databaseURL: "https://stripe-5f338.firebaseio.com",
    projectId: "stripe-5f338",
    storageBucket: "stripe-5f338.appspot.com",
    messagingSenderId: "685073183720"
  },
  stripeKey: "pk_test_lW1MY7AU5CKwr5EH6W004v9f"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
