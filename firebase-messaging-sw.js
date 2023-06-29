importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDYmt6s0xxvoCHtsXSflHczhMZ43GP8CQ-",
  authDomain: "grandcasino-47124.firebaseapp.com",
  projectId: "grandcasino-47124",
  messagingSenderId: "1055046129020",
  appId: "1:1055046129020:web:82d8b2224aa908550240f9",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();