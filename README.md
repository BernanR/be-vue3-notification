# Be Vue3 Notification

[![Vue 3](https://img.shields.io/badge/Vue-3-green)](https://img.shields.io/badge/Vue-3-green)

Simple, light, easy and elegant toast notifications for Vue3, in other words, for exact you'll need in real world.

For check it out, just click --> Check out the [live demo](https://bernanr.github.io/be-vue3-notification/)!

**Important!** The documentation is still under construction and will be improved, but here you have everything to get start.

- [Installation](#installation)
- [Usage](#usage)
  - [Plugin registration](#plugin-registration)
  - [Creating notifications](#creating-notifications)
  - [Positions](#positions)
  - [Animations](#animations)

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

### Creating notifications

To create notifications, you will need put the following tag in your main component, usually in App.vue

```html
<be-notifications/>
```
Also, you will need import `inject` method from vue, like: 

```html
import { inject } from 'vue';
```
Then you can create notifications by calling `inject("notify")` from within a component. Check the complete example on code bellow, also you can check it out others examples on how you can call a different type of notification [Clicking here](https://bernanr.github.io/be-vue3-notification/)! 

```html

<script>
    import { inject } from 'vue';

    const notify = inject("notify")

    notify("Hello World!")
  
    /** Success example **/
    notify({
      type: 'success',
      title : 'Congratulations!&#128526;',
      message : "You clicked on button successfully!" ,
      animation: 'slide',
      position: 'bottom-right',
    })

    /** one example on how calling chat notifications */
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

### Positions

The notifications will be displayed at the bottom right by default, but you can change it manually setting the `position` option.

Folow the list of all position that you can use:
**top-left**,
**top-center**,
**top-right**,
**bottom-left**,
**bottom-center**,
**bottom-right**

Or set it by type definitions.

```javascript
import BeNotification, {POSITION} from 'be-vue3-notification'

app.use(BeNotification, {
    // Making bottom left as a default position
    position: POSITION.BOTTOM_LEFT
});

// Also you can set it directly on calling of function.
import {POSITION} from 'be-vue3-notification'

notify("Hello Gecko!", { position: POSITION.BOTTOM_LEFT });
```

### Animations

bounce animate is been setup by default but you can change it, follow the list of all animations:
**bounce**,
**slide**,
**fade**,
**rotation**

```javascript
import BeNotification, {ANIMATION} from 'be-vue3-notification'

app.use(BeNotification, {
  transition: ANIMATION.BOUNCE,
});
```

if you want to see it in action and check more details just [Click here](https://bernanr.github.io/be-vue3-notification/)!
