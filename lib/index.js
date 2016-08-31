const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyAyPKx3GO5J1X0WOSwF3SRpH28wbIE1cGQ",
    authDomain: "snippet-sampler.firebaseapp.com",
    databaseURL: "https://snippet-sampler.firebaseio.com",
    storageBucket: "snippet-sampler.appspot.com",
  };

firebase.initializeApp(config);
