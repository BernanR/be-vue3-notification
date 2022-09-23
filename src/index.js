import BeNotification from './BeNotification.vue'
import { benotification } from './be-notification'
import './css'

export default {
    install: (app, setup) => {
      const set = setup || {}
      app.provide('benotifySetup', set)
      app.component("be-notifications", BeNotification)
      app.provide('notify', benotification)      
    }
  }
