importScripts('https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.10/firebase-messaging.js');
 
firebase.initializeApp({
    apiKey: "AIzaSyBawUPnBPzcx4Y256Jd7EqMveSOCmhv0Yk",
    authDomain: "fir-messages-ed5a7.firebaseapp.com",
    projectId: "fir-messages-ed5a7",
    storageBucket: "fir-messages-ed5a7.appspot.com",
    messagingSenderId: "282798683267",
    appId: "1:282798683267:web:171c04bbdea4d522d417b6"
});
 
const messaging = firebase.messaging();