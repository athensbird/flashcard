import { Notifications, Permissions } from 'expo';
import { View, StyleSheet, AsyncStorage } from 'react-native';

const NOTIFICATION_KEY = 'react-native-flashcard: notification';

export function isPlural(item) {
  const temp = item > 1 ? 's' : '';
  return temp;
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then((items) => {
      Notifications.cancelAllScheduledNotificationsAsync()
    });
}

function createNotification() {
  return {
    title: "Let's play flashcard!",
    body: "Expand your knowledge on React, Node and more!",
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            console.log(status);
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();
              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate());
              tomorrow.setHours(20);
              tomorrow.setMinutes(35);
              console.log(tomorrow.toString());
              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              );
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          })
      }
    })
}
