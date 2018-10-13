import { Permissions, Notification } from 'expo';
async function registerForPushNotificationsAsync(){
const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
let finalStatus = status;
if (status !== 'granted') {
const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
finalStatus = status;
}
if (finalStatus !== 'granted') {
return;
}
let token = await Notification.getExpoPushTokenAsync();
return fetch(PUSH_ENDPOINT, {
method: 'POST',
body: JSON.stringify({
token: {
value: token,
}
})
});
}
const request = {
to: string,
data?: Object,
title?: string,
body?: string,
sound?: 'default' | null,
ttl?: number,
expiration?: number,
priority?: 'default' | 'normal' | 'high',
badge?: number,
}