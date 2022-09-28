import BeNotification from './BeNotification.vue'
import { benotification } from './be-notification'
import './css'

console.log("teste")
export default {
    install: (app, _setup) => {
      const setup = _setup || {}
      app.provide('benotifySetup', setup)
      app.component("be-notifications", BeNotification)
      app.provide('notify', benotification)      
    }
  }
