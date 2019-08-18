// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl : 'http://localhost:8888',
  firebase : {
    apiKey: "AIzaSyDLsG90qDKNJfbWeZtOqkh7uCPLFp3T1lg",
    authDomain: "lmsstudent-627fd.firebaseapp.com",
    databaseURL: "https://lmsstudent-627fd.firebaseio.com",
    projectId: "lmsstudent-627fd",
    storageBucket: "",
    messagingSenderId: "646613971681",
    appId: "1:646613971681:web:431b984c6a8ee3ab"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
