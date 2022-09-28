
import { events } from "./events"

export const benotification = (notification) => {
    console.log("test A")
    events.emit('notify', notification)
}