# Be Vu3 Notification

[![Vue 3](https://img.shields.io/badge/Vue-3-green)](https://img.shields.io/badge/Vue-3-green)

Simple, light, easy and elegant toast notifications for Vue3.

Do you wat to try it out? Check out the [live demo](https://bernanr.github.io/be-vue3-notification/)!


**Important!** The documentation is still under construction.

 - [Installation](#installation)

 ## Installation

```
$ npm install --save be-vue3-notification
```


## Usage

### Plugin registration

Add it as a plugin to your app:
```javascript

import { createApp } from "vue";
import BeNotification from 'be-vue3-notification'
// you'll need import the CSS!
import 'be-vue3-notification/dist/style.css'

const app = createApp(...);

app.use(BeNotification);
```

### Creating notificatons

To create toasts, get a *toast interface* by calling `useToast` from within a component.

```html
<script>
    import { inject } from 'vue';

    const notify = inject("notify")

    notify("Hello World!")

    notify({
      type: 'success',
      title : 'Congratulations!&#128526;',
      message : "You clicked on button successfully!" ,
      animation: 'slide',
      position: 'bottom-right',
    })

    notify({
      type: 'info',
      title : 'Gecko sent you a message.',
      message : "How's it going? Do you need some help?",
      label: 'Gecko',
      thumb: baseUrl + 'assets/gecko.jpg',
      reply: true,
      animation: 'bounce',
      position: 'bottom-right',
      callback: (text) => {
        console.log("return callback", text)
        setTimeout(() => notify({
          type: 'success',
          title : 'It was amazing!',
          message : "Your message was sent successfully!",
          animation: 'bounce',
          position: 'bottom-right',
        }), 1000)        
      }
    }) 
</script>
```