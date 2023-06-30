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
    console.log('Разрешение на уведомления получено.');
  }).catch(function(error) {
    console.log('Не удалось получить разрешение на уведомления.', error);
  });
}

messaging.getToken()
  .then((currentToken) => {
    if (currentToken) {
      console.log('Token:', currentToken);
    } else {
      console.log('No registration token available.');
    }
  })
  .catch((error) => {
    console.log('An error occurred while retrieving token.', error);
  });

messaging.onMessage(function(payload) {
  console.log('Получено сообщение:', payload);
});