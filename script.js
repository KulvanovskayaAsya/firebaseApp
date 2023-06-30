var firebaseConfig = {
  apiKey: "AIzaSyBawUPnBPzcx4Y256Jd7EqMveSOCmhv0Yk",
  authDomain: "fir-messages-ed5a7.firebaseapp.com",
  projectId: "fir-messages-ed5a7",
  storageBucket: "fir-messages-ed5a7.appspot.com",
  messagingSenderId: "282798683267",
  appId: "1:282798683267:web:171c04bbdea4d522d417b6"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

function requestNotificationPermission() {
  messaging.requestPermission().then(function() {
    console.log('Notification permission granted.');
    // Subscribe to the FCM topic or send device token to your server
  }).catch(function(error) {
    console.log('Unable to get permission for notifications.', error);
  });
}

messaging.onMessage(function(payload) {
  console.log('Message received:', payload);
  // Display the notification using a library or custom code
});