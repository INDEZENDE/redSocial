import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({//Se integra firebase al proyecto
    apiKey: "AIzaSyAPlnl9tfvj8UUgVWZV81zJQxcUXt6oUiA",
    authDomain: "afforable-5e287.firebaseapp.com",
    databaseURL: "https://afforable-5e287.firebaseio.com",
    projectId: "afforable-5e287",
    storageBucket: "afforable-5e287.appspot.com",
    messagingSenderId: "667510518937"
  });

ReactDOM.render(
  <App />,
   document.getElementById('root'));
registerServiceWorker();
