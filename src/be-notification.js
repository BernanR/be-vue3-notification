
import { events } from "./events"

export const benotification = (notification) => {
    console.log("test A", notification)
    events.emit('notify', notification)
}