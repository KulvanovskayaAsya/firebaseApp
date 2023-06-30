# firebaseApp
 
    <script>
      const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
      };

      firebase.initializeApp(firebaseConfig);
      
      const messaging = firebase.messaging();

      function requestPermission() {
        Notification.requestPermission()
          .then((permission) => {
            if (permission === 'granted') {
              console.log('Уведомления разрешены');
              getToken();
            } else {
              console.log('Уведомления запрещены');
            }
          })
          .catch((error) => {
            console.log('Ошибка при запросе разрешения:', error);
          });
      }

      function getToken() {
        messaging.getToken({ vapidKey: 'YOUR_PUBLIC_VAPID_KEY' })
          .then((currentToken) => {
            if (currentToken) {
              console.log('Токен устройства:', currentToken);
            } else {
              console.log('Токен устройства не найден');
            }
          })
          .catch((error) => {
            console.log('Ошибка при получении токена устройства:', error);
          });
      }

      messaging.onMessage((payload) => {
        console.log('Получено сообщение:', payload);
      });
    </script>