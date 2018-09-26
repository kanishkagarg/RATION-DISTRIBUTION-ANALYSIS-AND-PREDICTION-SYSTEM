import React, { Component } from 'react';
import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBeKvF8SoCa5erTETgkBU_REBCZOzxgwaw",
    authDomain: "vikavi-01.firebaseapp.com",
    databaseURL: "https://vikavi-01.firebaseio.com",
    projectId: "vikavi-01",
    storageBucket: "vikavi-01.appspot.com",
    messagingSenderId: "960925598365"
  };

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();