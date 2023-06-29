import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js';
import { getMessaging, onMessage } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging.js';

const firebaseConfig = {
  apiKey: "AIzaSyDY-mt6s0xxvoCHtsXSflHczhMZ43GP8CQ",
  authDomain: "grandcasino-47124.firebaseapp.com",
  projectId: "grandcasino-47124",
  storageBucket: "grandcasino-47124.appspot.com",
  messagingSenderId: "1055046129020",
  appId: "1:1055046129020:web:82d8b2224aa908550240f9",
  measurementId: "G-B8ZQV7SDLF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging();

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
});