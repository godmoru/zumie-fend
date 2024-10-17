importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDV4D-ss-tMF9KUA7XVAyiOzYgYKnGhWxs",
  authDomain: "react-fend.firebaseapp.com",
  projectId: "react-fend",
  storageBucket: "react-fend.appspot.com",
  messagingSenderId: "642311245656",
  appId: "1:642311245656:web:0a3ad2222a89bfc9d49f2d",
  measurementId: "G-S6RMKMYWS8",
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
