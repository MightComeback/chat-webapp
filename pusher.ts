import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1531027",
  key: "1abd1a7c2dc794f3bd81",
  secret: "b531cba21f43379398e1",
  cluster: "eu",
  useTLS: true
});

export const clientPusher = new ClientPusher('1abd1a7c2dc794f3bd81', {
  cluster: 'eu',
});