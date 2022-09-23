
import { events } from "./events"

export const benotification = (notification) => {
    events.emit('notify', notification)
}