
import { events } from "./events"

export const benotification = (notification, setting={}) => {
    if (typeof notification === "string")
        setting.message = notification    
    else 
        setting = notification

    /** emit events './BeNotification.vue' */
    events.emit('notify', setting)
}