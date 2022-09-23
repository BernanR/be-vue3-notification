<script setup>
    import { inject, onMounted, ref } from 'vue';
    import { events } from './events';
    
    import BeTransitionGroup from './components/BeTransitionGroup.vue'
    import { POSITIONS, ANIMATIONS } from './constants'

    let count = 0;
    const notifications = ref([]);
    const setup = inject("benotifySetup")

    const defaultAtribute = {
        type : "info",
        animation : ANIMATIONS.BOUNCE,
        position: POSITIONS.BOTTOM_RIGHT,
        duration: 3000
    }

    onMounted(() => {
        /** emit events './be-notification.js' */
        events.on("notify", add)
        
        if (setup.position) defaultAtribute.position = setup.position
        if (setup.animation) defaultAtribute.animation = setup.animation
        if (setup.duration) defaultAtribute.duration = setup.duration
    })

    function generateId() {
        return count++;
    }

    function add(_notification) {
        
        if (typeof _notification === "string") {
            let text = _notification
            _notification = defaultAtribute
            _notification.message = text
        }
        const notification = new Object({ ...defaultAtribute, ..._notification })
        notification.id = generateId()
        notification.animation = ANIMATIONS[_notification.animation] || notification.animation
        notification.position = POSITIONS[_notification.position] || notification.position

        if (notification.reply) {
            notification.duration = _notification.duration || 9000
            notification.emitCallbackText = emitCallbackText
        }
        notification.selfRemove = runTimeoutNotify
        notifications.value.push(notification)
    }

    function runTimeoutNotify(action, _time) {
        const time = _time || this.duration
        if (action === 'clear') 
            clearTimeout(this.timeout)
        else
            this.timeout = setTimeout(() => remove(this.id), time)
    }

    function remove(id) {
        notifications.value.splice(notifications.value.findIndex(n => n.id === id), 1)
    }

    function emitCallbackText(text, notification) {
        notification.callback(text);
        setTimeout(() => remove(notification.id), 500)        
    }
</script>

<template>
    <BeTransitionGroup 
        v-for="POSITION in POSITIONS"
        :position="POSITION" 
        :notifications="notifications.filter((e) => {return e.position === POSITION} )"
        @remove="remove"
    >
    </BeTransitionGroup>   
</template>